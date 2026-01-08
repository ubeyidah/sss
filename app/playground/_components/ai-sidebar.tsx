"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { ArrowUpIcon, Pause } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useChat } from "@ai-sdk/react";
import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import useAutoScroll from "@/hooks/use-auto-scroll";

const AiChatSidebar = () => {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, stop } = useChat();
  const [pending, startTransition] = useTransition();
  const bottomRef = useAutoScroll(messages);

  return (
    <aside className="h-screen flex flex-col justify-between sticky top-0 right-0 border border-t-0 w-full max-w-md">
      sidebar
      <div className="h-full overflow-y-auto space-y-5 px-4 py-4 text-sm">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "whitespace-pre-wrap p-2 w-fit px-4 ml-auto bg-primary/5 border border-primary/10",
              message.role != "user" && "bg-muted/20 ml-0",
            )}
          >
            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text":
                  return (
                    <ReactMarkdown key={`${message.id}-${i}`}>
                      {part.text}
                    </ReactMarkdown>
                  );
              }
            })}
          </div>
        ))}
        <div ref={bottomRef} />
        {status == "error" && (
          <div className="text-destructive whitespace-pre-wrap p-2 w-fit px-4 bg-destructive/5 border border-destructive/15">
            Something went wrong. Please try again shortly.
          </div>
        )}
      </div>
      <div className="p-1 border-t">
        <InputGroup>
          <InputGroupTextarea
            className="min-h-24"
            placeholder="Ask, Search or Chat..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <InputGroupAddon align="block-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <InputGroupButton variant="ghost">Auto</InputGroupButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                align="start"
                className="[--radius:0.95rem]"
              >
                <DropdownMenuItem>Auto</DropdownMenuItem>
                <DropdownMenuItem>Agent</DropdownMenuItem>
                <DropdownMenuItem>Manual</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <InputGroupText className="ml-auto">52% used</InputGroupText>
            <Separator orientation="vertical" className="h-4!" />
            <InputGroupButton
              variant="default"
              onClick={() => {
                startTransition(async () => {
                  await sendMessage({ text: input });
                  setInput("");
                });
              }}
              className="cursor-pointer"
              disabled={pending}
            >
              {pending ? (
                <>
                  <HugeiconsIcon icon={Pause} strokeWidth={3} />
                  <span className="sr-only">Stop</span>
                </>
              ) : (
                <>
                  SEND
                  <HugeiconsIcon icon={ArrowUpIcon} strokeWidth={3} />
                  <span className="sr-only">Send</span>
                </>
              )}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </aside>
  );
};

export default AiChatSidebar;
