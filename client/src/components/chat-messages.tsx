import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ChatMessagesProps {
  messages: {
    role: "user" | "assistant";
    content: string;
  }[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight);
  }, [messages]);

  return (
    <div
      ref={messagesRef}
      className="flex max-h-[500px] flex-col space-y-4 overflow-y-auto p-4"
    >
      {messages.map((message, index) => (
        <div
          key={index}
          className={cn("whitespace-pre-wrap text-sm", {
            "text-right": message.role === "user",
            "text-left text-muted-foreground": message.role === "assistant",
          })}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
}
