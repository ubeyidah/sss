# SSS (Single Source Structure) Installation Script
# prevents script from continuing after error
$ErrorActionPreference = "Stop"

# ANSI color codes for terminal output
$GREEN = "`e[0;32m"    # Success messages
$BLUE = "`e[0;34m"     # Info/headers
$YELLOW = "`e[1;33m"   # Warnings/progress
$RED = "`e[0;31m"      # Errors (not used but good to have)
$NC = "`e[0m"          # No Color - resets to default

# DEFAULT CONFIGURATION
param(
    [switch]$YearBased = $false,
    [switch]$Readme = $false,
    [string]$Folders = ""
)

$YEAR_BASED = $YearBased
$CREATE_README = $Readme
$FolderList = @()

# PARSE COMMAND LINE ARGUMENTS
# Loop through all arguments passed to script
# Example: .\install.ps1 -YearBased -Readme -Folders "Personal,Work"
if ([string]::IsNullOrWhiteSpace($Folders)) {
    # SET DEFAULT FOLDERS IF NONE PROVIDED
    $FolderList = @("Personal", "Work", "OpenSource", "Playground", "Courses")
} else {
    # If argument doesn't match flags above, treat it as a folder name
    $FolderList = $Folders -split ',' | ForEach-Object { $_.Trim('"').Trim() }
}

# DETERMINE DIRECTORIES
$HOME_DIR = $env:USERPROFILE
$WORKSPACE_DIR = Join-Path $HOME_DIR "Workspaces"

# PRINT BANNER - Show user what's happening
Write-Host ""
Write-Host "$BLUE╔════════════════════════════════════════╗$NC"
Write-Host "$BLUE║$NC  SSS - Single Source Structure         $BLUE║$NC"
Write-Host "$BLUE║$NC  Project Organization Made Simple      $BLUE║$NC"
Write-Host "$BLUE╚════════════════════════════════════════╝$NC"
Write-Host "" # Empty line for spacing

# CREATE MAIN WORKSPACES DIRECTORY
Write-Host "$YELLOW→$NC Creating Workspaces directory..."
if (!(Test-Path $WORKSPACE_DIR)) {
    New-Item -ItemType Directory -Path $WORKSPACE_DIR -Force | Out-Null
}
Write-Host "$GREEN✓$NC Created: $WORKSPACE_DIR"
Write-Host ""

# Get current year (2025, 2026, etc.)
$CURRENT_YEAR = (Get-Date).Year

# CREATE EACH FOLDER - Main loop
foreach ($FOLDER in $FolderList) {
    $FOLDER_PATH = Join-Path $WORKSPACE_DIR $FOLDER
    
    # Check if year-based organization is enabled
    if ($YEAR_BASED) {
        # Create nested structure: Workspaces\Personal\2025\
        $YEAR_PATH = Join-Path $FOLDER_PATH $CURRENT_YEAR
        New-Item -ItemType Directory -Path $YEAR_PATH -Force | Out-Null
        Write-Host "$GREEN✓$NC Created: $FOLDER\$CURRENT_YEAR\"
        $TARGET_PATH = $YEAR_PATH
    } else {
        # Just create: Workspaces\Personal\
        New-Item -ItemType Directory -Path $FOLDER_PATH -Force | Out-Null
        Write-Host "$GREEN✓$NC Created: $FOLDER\"
        $TARGET_PATH = $FOLDER_PATH
    }
}

# SUCCESS MESSAGE & FOLDER TREE PREVIEW
Write-Host "" # Spacing
Write-Host "$GREEN╔════════════════════════════════════════╗$NC"
Write-Host "$GREEN║$NC  ✓ SSS Setup Complete!                 $GREEN║$NC"
Write-Host "$GREEN╚════════════════════════════════════════╝$NC"
Write-Host ""

Write-Host "$BLUE`Your project structure:$NC"
Write-Host "  $WORKSPACE_DIR\"

# Loop through folders to show tree structure
foreach ($FOLDER in $FolderList) {
    if ($YEAR_BASED) {
        Write-Host "  ├── $FOLDER\"
        Write-Host "  │   └── $CURRENT_YEAR\"
    } else {
        Write-Host "  ├── $FOLDER\"
    }
}

# NEXT STEPS GUIDE
Write-Host ""
Write-Host "$YELLOW`Next steps:$NC"
Write-Host "  1. Navigate to your Workspaces: $BLUE`cd $WORKSPACE_DIR$NC"
Write-Host "  2. Start organizing your projects!"
Write-Host "  3. Share SSS with others: $BLUE`https://sss.setup$NC"
Write-Host ""
Write-Host "$GREEN`Happy organizing!🚀$NC"
