"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Plus } from "@hugeicons/core-free-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface CreateFolderProps {
  onAddFolder: (name: string) => void;
  onUpdate?: (name: string) => void;
  defaultValue?: string;
}

export function CreateFolder({ onAddFolder, onUpdate, defaultValue }: CreateFolderProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState(defaultValue || "");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNewFolderName(defaultValue || "");
    if (defaultValue) {
      setDialogOpen(true);
    }
  }, [defaultValue]);

  const handleCreate = () => {
    if (newFolderName.trim()) {
      // Capitalize the name (Pascal case: first letter of each word uppercase)
      const capitalizedName = newFolderName
        .trim()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
      if (defaultValue && onUpdate) {
        onUpdate(capitalizedName);
      } else {
        onAddFolder(capitalizedName);
      }
      setNewFolderName("");
      setDialogOpen(false);
    }
  };

  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>
        <HugeiconsIcon icon={Plus} /> Add Folder
      </Button>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{defaultValue ? "Edit Folder" : "Add Folder"}</DialogTitle>
            <DialogDescription>
              {defaultValue ? "Update the name for the folder." : "Enter the name for the new folder."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <label htmlFor="folder-name" className="text-sm font-medium">
              Folder Name
            </label>
            <Input
              id="folder-name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              placeholder="e.g., Projects"
              className="capitalize"
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setNewFolderName("");
                setDialogOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button onClick={handleCreate}>{defaultValue ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
