"use client";

import * as React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChevronRight, Folder } from "@hugeicons/core-free-icons";
import { usePlayground, type TreeNode } from "./playground-context";

export function PlaygroundSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { treeData, yearBased } = usePlayground();

  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Structure</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarTreeNode node={treeData} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Info</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-3 text-xs text-muted-foreground space-y-1">
              <p>Folders: {treeData.children?.length ?? 0}</p>
              <p>Year-based: {yearBased ? "Yes" : "No"}</p>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

function SidebarTreeNode({ node }: { node: TreeNode }) {
  if (!node.children || node.children.length === 0) {
    return (
      <SidebarMenuButton>
        <HugeiconsIcon icon={Folder} />
        {node.name}
      </SidebarMenuButton>
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <HugeiconsIcon icon={ChevronRight} />
            <HugeiconsIcon icon={Folder} />
            {node.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {node.children.map((child, index) => (
              <SidebarTreeNode key={index} node={child} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
