"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Folder01Icon, Folder02Icon, Delete01Icon, PencilEdit01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

interface TreeNode {
  name: string;
  type: "folder" | "file";
  children?: TreeNode[];
}

function TreeNode({ node, level = 0, onDelete, onEdit }: { node: TreeNode; level?: number; onDelete: (name: string) => void; onEdit: (name: string) => void }) {
  const [isOpen, setIsOpen] = useState(level < 2);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        className="group flex items-center justify-between py-1 hover:bg-muted/50 rounded px-3 cursor-pointer"
        onClick={node.type === "folder" ? toggleOpen : undefined}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={isOpen ? Folder02Icon : Folder01Icon} size={16} />
          <span className="text-sm">{node.name}</span>
        </div>
        {level > 0 && !/^\d{4}$/.test(node.name) && (
          <div className="flex gap-1 opacity-0 group-hover:opacity-100">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(node.name);
              }}
            >
              <HugeiconsIcon icon={PencilEdit01Icon} size={14} />
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(node.name);
              }}
            >
              <HugeiconsIcon icon={Delete01Icon} size={14} />
            </Button>
          </div>
        )}
      </div>
      {isOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} level={level + 1} onDelete={onDelete} onEdit={onEdit} />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTree({ treeData, onDelete, onEdit }: { treeData: TreeNode; onDelete: (name: string) => void; onEdit: (name: string) => void }) {
  return (
    <div className="border border-primary/20 h-full bg-muted/20">
      <TreeNode node={treeData} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}
