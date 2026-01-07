#!/bin/bash

# SSS (Single Source Structure) Installation Script

set -e # prevents script from continuing after error

# ANSI color codes for terminal output
GREEN='\033[0;32m'  # Success messages
BLUE='\033[0;34m'   # Info/headers
YELLOW='\033[1;33m' # Warnings/progress
RED='\033[0;31m'    # Errors (not used but good to have)
NC='\033[0m'        # No Color - resets to default

# DEFAULT CONFIGURATION
YEAR_BASED=false
CREATE_README=false
FOLDERS=()

# PARSE COMMAND LINE ARGUMENTS
# Loop through all arguments passed to script
# Example: bash install.sh --year-based --gitignore "Personal" "Work"

while [[ $# -gt 0 ]]; do

  case $1 in
  --year-based)
    YEAR_BASED=true
    shift # move to next argument
    ;;

  --readme)
    CREATE_README=true
    shift
    ;;

  *)
    # If argument doesn't match flags above, treat it as a folder name
    FOLDERS+=("$1")
    shift
    ;;
  esac

done

# SET DEFAULT FOLDERS IF NONE PROVIDED

if [ ${#FOLDERS[@]} -eq 0 ]; then
  FOLDERS=("Personal" "Work" "OpenSource" "Playground" "Courses")
fi

# DETERMINE DIRECTORIES
HOME_DIR="$HOME"
WORKSPACE_DIR="$HOME_DIR/Workspaces"

# PRINT BANNER - Show user what's happening
# -e flag enables interpretation of backslash escapes (colors)
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║${NC}  SSS - Single Source Structure         ${BLUE}║${NC}"
echo -e "${BLUE}║${NC}  Project Organization Made Simple      ${BLUE}║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo "" # Empty line for spacing

# CREATE MAIN WORKSPACES DIRECTORY
echo -e "${YELLOW}→${NC} Creating Workspaces directory..."

mkdir -p "$WORKSPACE_DIR"

echo -e "${GREEN}✓${NC} Created: $WORKSPACE_DIR"
echo ""

# date +%Y = Get current year (2025, 2026, etc.)
CURRENT_YEAR=$(date +%Y)

# CREATE EACH FOLDER - Main loop
for FOLDER in "${FOLDERS[@]}"; do
  FOLDER_PATH="$WORKSPACE_DIR/$FOLDER"

  # Check if year-based organization is enabled

  if [ "$YEAR_BASED" = true ]; then
    # Create nested structure: Workspaces/Personal/2025/

    YEAR_PATH="$FOLDER_PATH/$CURRENT_YEAR"
    mkdir -p "$YEAR_PATH"
    echo -e "${GREEN}✓${NC} Created: $FOLDER/$CURRENT_YEAR/"
    TARGET_PATH="$YEAR_PATH"

  else
    # Just create: Workspaces/Personal/

    mkdir -p "$FOLDER_PATH"
    echo -e "${GREEN}✓${NC} Created: $FOLDER/"
    TARGET_PATH="$FOLDER_PATH"
  fi
done

# SUCCESS MESSAGE & FOLDER TREE PREVIEW
echo "" # Spacing
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║${NC}  ✓ SSS Setup Complete!                 ${GREEN}║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""

echo -e "${BLUE}Your project structure:${NC}"
echo -e "  $WORKSPACE_DIR/"

# Loop through folders to show tree structure
for FOLDER in "${FOLDERS[@]}"; do
  if [ "$YEAR_BASED" = true ]; then
    echo -e "  ├── $FOLDER/"
    echo -e "  │   └── $CURRENT_YEAR/"
  else
    echo -e "  ├── $FOLDER/"
  fi
done

# NEXT STEPS GUIDE
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "  1. Navigate to your Workspaces: ${BLUE}cd $WORKSPACE_DIR${NC}"
echo -e "  2. Start organizing your projects!"
echo -e "  3. Share SSS with others: ${BLUE}https://sss.setup${NC}"
echo ""
echo -e "${GREEN}Happy organizing!🚀${NC}"
