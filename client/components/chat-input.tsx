"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

export function ChatInput() {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const { hasPrivateKey } = useAppSelector((state) => state.auth);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "inherit";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [textareaRef]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if private key exists
    if (!hasPrivateKey) {
      router.push("/private-key");
      return;
    }

    if (!message.trim()) return;
    console.log("Sending message:", message);
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="max-w-2xl w-full mx-auto py-2 px-4">
      <div className="relative">
        <Textarea
          ref={textareaRef}
          placeholder="Confused about your finances? I've got you!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="min-h-[48px] max-h-[200px] rounded-2xl resize-none p-4 pr-16 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-0 focus:border-zinc-600 scrollbar-hide"
          rows={1}
        />
        <Button
          onClick={handleSubmit}
          disabled={!message.trim()}
          size="icon"
          className="absolute right-3 top-3 h-8 w-8 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowUp className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </div>
  );
}
