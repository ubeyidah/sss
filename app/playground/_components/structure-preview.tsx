"use client";

import { usePlayground } from "./playground-context";
import { FileTree } from "@/app/_components/file-tree";
import { CodeSnippet } from "@/app/_components/code-snippet";

export function StructurePreview() {
  const { treeData, folders, setFolders, setEditingFolder, linuxCommand, windowsCommand } =
    usePlayground();

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        Preview
      </h3>
      <FileTree
        treeData={treeData}
        onDelete={(name) => setFolders(folders.filter((f) => f !== name))}
        onEdit={setEditingFolder}
      />

      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        Install
      </h3>
      <CodeSnippet
        code={linuxCommand}
        language="bash"
        title="Linux / Mac"
      />
      <CodeSnippet
        code={windowsCommand}
        language="powershell"
        title="Windows"
      />
    </div>
  );
}
