"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { usePlayground } from "./playground-context";
import { CreateFolder } from "@/app/_components/create-folder";

export function ConfigPanel() {
  const {
    folders,
    setFolders,
    yearBased,
    setYearBased,
    editingFolder,
    setEditingFolder,
  } = usePlayground();

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        Configuration
      </h3>
      <Label className="hover:bg-accent/50 flex items-start gap-3 border p-3 has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/20 dark:has-[[aria-checked=true]]:border-primary dark:has-[[aria-checked=true]]:bg-primary/5">
        <Checkbox
          checked={yearBased}
          onCheckedChange={(checked) => setYearBased(checked === true)}
          className="data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white dark:data-[state=checked]:border-primary dark:data-[state=checked]:bg-primary"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Year-based organization
          </p>
          <p className="text-muted-foreground text-xs">
            Organize projects by year for better archiving.
          </p>
        </div>
      </Label>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Folders
          </h3>
          <CreateFolder
            onAddFolder={(name) => setFolders([...folders, name])}
            onUpdate={(newName) => {
              if (editingFolder) {
                setFolders(
                  folders.map((f) => (f === editingFolder ? newName : f))
                );
                setEditingFolder(null);
              }
            }}
            defaultValue={editingFolder || undefined}
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {folders.map((folder) => (
            <span
              key={folder}
              className="inline-flex items-center gap-1.5 border px-2 py-1 text-xs"
            >
              {folder}
              <button
                onClick={() =>
                  setFolders(folders.filter((f) => f !== folder))
                }
                className="text-muted-foreground hover:text-destructive cursor-pointer"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
