import { useEffect, useRef } from "react";
import { MOODS, type MoodType } from "@/lib/mood-config";
import { Moon, User } from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "luna" | "system";
  content: string;
  mood: MoodType;
  timestamp: Date;
  type?: "mood_change";
}

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
  currentMood: MoodType;
}

export function ChatMessages({ messages, isLoading, currentMood }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const formatTime = (timestamp: Date) => {
    return new Date(timestamp).toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {/* Welcome Message */}
      {messages.length === 0 && (
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Moon className="w-4 h-4 text-white" />
          </div>
          <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs sm:max-w-md lg:max-w-lg shadow-sm border border-gray-100">
            <p className="text-gray-800 text-sm leading-relaxed">
              🌙 Halo! Aku Luna Del Elys, asisten AI-mu. Aku siap membantu dengan berbagai mood sesuai kebutuhan. Cobalah ubah mood-ku atau mulai percakapan!
            </p>
            <span className="text-xs text-gray-400 block mt-2">Baru saja</span>
          </div>
        </div>
      )}

      {/* Messages */}
      {messages.map((message) => {
        if (message.sender === "system") {
          return (
            <div key={message.id} className="flex items-center justify-center my-4">
              <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>{message.content}</span>
              </div>
            </div>
          );
        }

        if (message.sender === "user") {
          return (
            <div key={message.id} className="flex items-start justify-end space-x-3">
              <div className="bg-indigo-500 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs sm:max-w-md lg:max-w-lg">
                <p className="text-white text-sm leading-relaxed">{message.content}</p>
                <span className="text-xs text-indigo-200 block mt-2">
                  {formatTime(message.timestamp)}
                </span>
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          );
        }

        if (message.sender === "luna") {
          const mood = MOODS[message.mood];
          return (
            <div key={message.id} className="flex items-start space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-br ${mood.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-xs">{mood.emoji}</span>
              </div>
              <div className={`bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs sm:max-w-md lg:max-w-lg shadow-sm border ${mood.borderColor}`}>
                <p className="text-gray-800 text-sm leading-relaxed">{message.content}</p>
                <span className="text-xs text-gray-400 block mt-2">
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </div>
          );
        }

        return null;
      })}

      {/* Loading Message */}
      {isLoading && (
        <div className="flex items-start space-x-3">
          <div className={`w-8 h-8 bg-gradient-to-br ${MOODS[currentMood].color} rounded-full flex items-center justify-center flex-shrink-0`}>
            <span className="text-white text-xs">{MOODS[currentMood].emoji}</span>
          </div>
          <div className={`bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs sm:max-w-md lg:max-w-lg shadow-sm border ${MOODS[currentMood].borderColor}`}>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              <span className="text-xs text-gray-400">Luna sedang mengetik...</span>
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
