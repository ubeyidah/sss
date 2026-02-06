"use client";

import { presets, usePlayground } from "./playground-context";
import { cn } from "@/lib/utils";

export function TemplatePresets() {
  const { selectedPreset, setSelectedPreset } = usePlayground();

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        Base Template
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => setSelectedPreset(preset.name)}
            className={cn(
              "text-left border p-3 transition-colors cursor-pointer hover:bg-accent/50",
              selectedPreset === preset.name &&
                "border-primary bg-primary/5"
            )}
          >
            <p className="text-sm font-medium">{preset.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {preset.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
