"use client";

import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";

interface CodeSnippetProps {
  code: string;
  language: string;
  title: string;
}

export function CodeSnippet({ code, language, title }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="border border-primary/20 overflow-hidden bg-muted/20">
      <div className="flex items-center justify-between p-2 bg-primary/5 border-primary/20 border-b">
        <span className="text-sm font-medium">{title}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
        >
          <HugeiconsIcon icon={copied ? Tick02Icon : Copy01Icon} size={16} />
        </Button>
      </div>
      <Highlight theme={themes.vsDark} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} bg-black! p-4 px-2 text-sm overflow-x-auto`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
