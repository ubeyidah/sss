"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Folder01Icon, Folder02Icon, File01Icon } from "@hugeicons/core-free-icons";

interface TreeNode {
  name: string;
  type: "folder" | "file";
  children?: TreeNode[];
}

const treeData: TreeNode = {
  name: "Workspaces",
  type: "folder",
  children: [
    {
      name: "Personal",
      type: "folder",
      children: [
        {
          name: "2025",
          type: "folder",
        },
      ],
    },
    {
      name: "Work",
      type: "folder",
      children: [
        {
          name: "freelancing",
          type: "folder",
          children: [{ name: "client-website", type: "folder" }],
        },
      ],
    },
    {
      name: "Playground",
      type: "folder",
      children: [{ name: "react-hooks-test", type: "folder" }],
    },
  ],
};

function TreeNode({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isOpen, setIsOpen] = useState(level < 2);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        className="flex items-center gap-2 py-1 hover:bg-muted/50 rounded px-3 cursor-pointer"
        onClick={node.type === "folder" ? toggleOpen : undefined}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        <HugeiconsIcon icon={isOpen ? Folder02Icon : Folder01Icon} size={16} />
        <span className="text-sm">{node.name}</span>
      </div>
      {isOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTree() {
  return (
    <div className="border border-primary/20 h-full bg-muted/20">
      <TreeNode node={treeData} />
    </div>
  );
}
