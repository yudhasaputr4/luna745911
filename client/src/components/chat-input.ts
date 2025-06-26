import { SendIcon } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
  isLoading: boolean;
  onSubmit: (value: string) => void;
}

export function ChatInput({ isLoading, onSubmit }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        className="peer w-full rounded-md border border-zinc-200 bg-white px-4 py-2 pr-10 text-sm shadow-sm placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500"
        placeholder="Ask Luna anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="absolute inset-y-0 right-0 flex items-center justify-center px-2 text-zinc-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 dark:text-zinc-500"
      >
        <SendIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
