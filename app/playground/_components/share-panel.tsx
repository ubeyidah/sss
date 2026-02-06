"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePlayground } from "./playground-context";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick02Icon, Share01Icon } from "@hugeicons/core-free-icons";

export function SharePanel() {
  const { folders, yearBased } = usePlayground();
  const [copied, setCopied] = useState(false);

  const shareData = () => {
    const params = new URLSearchParams();
    params.set("folders", folders.join(","));
    if (yearBased) params.set("yearBased", "true");
    return `${window.location.origin}/playground?${params.toString()}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareData());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API may be unavailable in insecure contexts; silently ignore
    }
  };

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={handleCopy} className="gap-1.5">
        <HugeiconsIcon icon={copied ? Tick02Icon : Share01Icon} size={14} />
        {copied ? "Link Copied!" : "Share Structure"}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(
              JSON.stringify({ folders, yearBased }, null, 2)
            );
          } catch {
            // Clipboard API may be unavailable in insecure contexts; silently ignore
          }
        }}
        className="gap-1.5"
      >
        <HugeiconsIcon icon={Copy01Icon} size={14} />
        Copy Config
      </Button>
    </div>
  );
}
