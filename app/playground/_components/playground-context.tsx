"use client";

import { createContext, useContext, useState, useMemo, ReactNode } from "react";

export interface Preset {
  name: string;
  description: string;
  folders: string[];
}

export const presets: Preset[] = [
  {
    name: "Developer",
    description: "Side projects, client work, OSS contributions",
    folders: ["Personal", "Work", "OpenSource", "Playground", "Courses"],
  },
  {
    name: "Content Creator",
    description: "Active projects, published content, assets",
    folders: ["Active", "Published", "Drafts", "Assets", "Clients", "Archive"],
  },
  {
    name: "Student",
    description: "Courses, assignments, research, notes",
    folders: ["Courses", "Projects", "Research", "Notes", "Assignments", "Resources"],
  },
  {
    name: "Freelancer",
    description: "Client work, proposals, templates, invoices",
    folders: ["Active", "Clients", "Proposals", "Templates", "Finance", "Portfolio"],
  },
];

export interface TreeNode {
  name: string;
  type: "folder" | "file";
  children?: TreeNode[];
}

interface PlaygroundContextValue {
  folders: string[];
  setFolders: (folders: string[]) => void;
  yearBased: boolean;
  setYearBased: (v: boolean) => void;
  selectedPreset: string | null;
  setSelectedPreset: (name: string | null) => void;
  editingFolder: string | null;
  setEditingFolder: (name: string | null) => void;
  treeData: TreeNode;
  linuxCommand: string;
  windowsCommand: string;
}

const PlaygroundContext = createContext<PlaygroundContextValue | null>(null);

export function PlaygroundProvider({ children }: { children: ReactNode }) {
  const defaultFolders = ["Personal", "Work", "OpenSource", "Playground", "Courses"];
  const [folders, setFolders] = useState<string[]>(defaultFolders);
  const [yearBased, setYearBased] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string | null>("Developer");
  const [editingFolder, setEditingFolder] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const applyPreset = (name: string | null) => {
    setSelectedPreset(name);
    const preset = presets.find((p) => p.name === name);
    if (preset) {
      setFolders(preset.folders);
    }
  };

  const treeData = useMemo<TreeNode>(() => {
    const baseTree: TreeNode = {
      name: "Workspaces",
      type: "folder",
      children: folders.map((name) => ({ name, type: "folder" as const })),
    };

    if (yearBased) {
      baseTree.children = baseTree.children?.map((child) => ({
        ...child,
        children: [{ name: currentYear.toString(), type: "folder" as const }],
      }));
    }

    return baseTree;
  }, [folders, yearBased, currentYear]);

  const linuxCommand = useMemo(() => {
    const base = "https://sss-cli.vercel.app";
    let cmd = `curl -fsSL ${base}/scripts/install.sh | bash -s --`;
    if (yearBased) cmd += " --year-based";
    folders.forEach((folder) => (cmd += ` "${folder}"`));
    return cmd;
  }, [yearBased, folders]);

  const windowsCommand = useMemo(() => {
    const base = "https://sss-cli.vercel.app";
    let cmd = `irm ${base}/scripts/install.ps1 | iex -Args`;
    if (yearBased) cmd += " -YearBased";
    cmd += ` -Folders "${folders.join(",")}"`;
    return cmd;
  }, [yearBased, folders]);

  return (
    <PlaygroundContext.Provider
      value={{
        folders,
        setFolders,
        yearBased,
        setYearBased,
        selectedPreset,
        setSelectedPreset: applyPreset,
        editingFolder,
        setEditingFolder,
        treeData,
        linuxCommand,
        windowsCommand,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
}

export function usePlayground() {
  const ctx = useContext(PlaygroundContext);
  if (!ctx) throw new Error("usePlayground must be used within PlaygroundProvider");
  return ctx;
}
