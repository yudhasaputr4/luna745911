import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MOODS, type MoodType } from "@/lib/mood-config";
import { Moon } from "lucide-react";

interface ChatHeaderProps {
  currentMood: MoodType;
  onMoodChange: (mood: MoodType) => void;
}

export function ChatHeader({ currentMood, onMoodChange }: ChatHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
          <Moon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Luna Del Elys</h1>
          <p className="text-xs text-gray-500">AI Assistant</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500 hidden sm:block">Mood:</span>
        <Select value={currentMood} onValueChange={onMoodChange}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(MOODS).map(([key, mood]) => (
              <SelectItem key={key} value={key}>
                {mood.emoji} {mood.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
