import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChatHeader } from "@/components/chat-header";
import { ChatMessages } from "@/components/chat-messages";
import { ChatInput } from "@/components/chat-input";
import { ApiKeyModal } from "@/components/api-key-modal";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { type MoodType } from "@/lib/mood-config";

interface Message {
  id: number;
  sender: "user" | "luna" | "system";
  content: string;
  mood: MoodType;
  timestamp: Date;
}

export default function Chat() {
  const [sessionId, setSessionId] = useState<string>("");
  const [currentMood, setCurrentMood] = useState<MoodType>("netral");
  const [messages, setMessages] = useState<Message[]>([]);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const { toast } = useToast();

  // Check for API key on mount
  useEffect(() => {
    const apiKey = localStorage.getItem("openai_api_key");
    if (!apiKey) {
      setShowApiKeyModal(true);
    }
  }, []);

  // Create chat session
  const createSessionMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/chat/session");
      return response.json();
    },
    onSuccess: (data) => {
      setSessionId(data.sessionId);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Gagal membuat sesi chat",
        variant: "destructive",
      });
    },
  });

  // Send message mutation
  const sendMessageMutation = useMutation({
    mutationFn: async ({ message, mood }: { message: string; mood: MoodType }) => {
      const response = await apiRequest("POST", `/api/chat/${sessionId}/message`, {
        content: message,
        mood,
      });
      return response.json();
    },
    onSuccess: (data) => {
      if (data.type === "mood_change") {
        setCurrentMood(data.mood);
        setMessages(prev => [...prev, {
          id: Date.now(),
          sender: "system",
          content: data.message,
          mood: data.mood,
          timestamp: new Date(),
        }]);
      } else if (data.type === "messages") {
        setMessages(prev => [
          ...prev,
          {
            ...data.userMessage,
            timestamp: new Date(data.userMessage.timestamp),
          },
          {
            ...data.lunaMessage,
            timestamp: new Date(data.lunaMessage.timestamp),
          },
        ]);
      }
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Gagal mengirim pesan",
        variant: "destructive",
      });
    },
  });

  // Initialize session on mount
  useEffect(() => {
    if (!showApiKeyModal) {
      createSessionMutation.mutate();
    }
  }, [showApiKeyModal]);

  const handleApiKeySubmit = (apiKey: string) => {
    localStorage.setItem("openai_api_key", apiKey);
    setShowApiKeyModal(false);
    toast({
      title: "Success",
      description: "API key berhasil disimpan!",
    });
    createSessionMutation.mutate();
  };

  const handleSendMessage = (message: string) => {
    if (!sessionId) return;

    // Check if it's a mood command
    if (message.toLowerCase().startsWith("mood=")) {
      const moodReq = message.split("=")[1].trim().toLowerCase() as MoodType;
      if (["netral", "bahagia", "sedih", "marah"].includes(moodReq)) {
        setCurrentMood(moodReq);
        setMessages(prev => [...prev, {
          id: Date.now(),
          sender: "system",
          content: `Mood Luna diubah ke: ${moodReq.charAt(0).toUpperCase() + moodReq.slice(1)}`,
          mood: moodReq,
          timestamp: new Date(),
        }]);
        return;
      }
    }

    sendMessageMutation.mutate({ message, mood: currentMood });
  };

  const handleMoodChange = (mood: MoodType) => {
    setCurrentMood(mood);
    setMessages(prev => [...prev, {
      id: Date.now(),
      sender: "system",
      content: `Mood Luna diubah ke: ${mood.charAt(0).toUpperCase() + mood.slice(1)}`,
      mood,
      timestamp: new Date(),
    }]);
  };

  return (
    <div className="h-screen flex flex-col max-w-4xl mx-auto bg-white shadow-lg">
      <ChatHeader 
        currentMood={currentMood} 
        onMoodChange={handleMoodChange}
      />
      
      <ChatMessages 
        messages={messages}
        isLoading={sendMessageMutation.isPending}
        currentMood={currentMood}
      />
      
      <ChatInput 
        onSendMessage={handleSendMessage}
        onMoodChange={handleMoodChange}
        isLoading={sendMessageMutation.isPending}
      />

      <ApiKeyModal 
        isOpen={showApiKeyModal}
        onSubmit={handleApiKeySubmit}
      />
    </div>
  );
}
