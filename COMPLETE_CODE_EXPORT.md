# Luna Del Elys - Complete Code Export

## Project Structure
```
luna-del-elys/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── components.json
├── drizzle.config.ts
├── luna.md
├── shared/
│   └── schema.ts
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   ├── vite.ts
│   └── services/
│       └── openai.ts
└── client/
    ├── index.html
    └── src/
        ├── main.tsx
        ├── App.tsx
        ├── index.css
        ├── lib/
        │   ├── queryClient.ts
        │   ├── mood-config.ts
        │   └── utils.ts
        ├── hooks/
        │   └── use-toast.ts
        ├── components/
        │   ├── api-key-modal.tsx
        │   ├── chat-header.tsx
        │   ├── chat-messages.tsx
        │   ├── chat-input.tsx
        │   └── ui/ (40+ shadcn components)
        └── pages/
            ├── chat.tsx
            └── not-found.tsx
```

## Core Files

### package.json
```json
{
  "name": "rest-express",
  "version": "1.0.0",
  "type": "module",
  "license": "MIT",
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "check": "tsc",
    "db:push": "drizzle-kit push"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@jridgewell/trace-mapping": "^0.3.25",
    "@neondatabase/serverless": "^0.10.4",
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-alert-dialog": "^1.1.7",
    "@radix-ui/react-aspect-ratio": "^1.1.3",
    "@radix-ui/react-avatar": "^1.1.4",
    "@radix-ui/react-checkbox": "^1.1.5",
    "@radix-ui/react-collapsible": "^1.1.4",
    "@radix-ui/react-context-menu": "^2.2.7",
    "@radix-ui/react-dialog": "^1.1.7",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-hover-card": "^1.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-menubar": "^1.1.7",
    "@radix-ui/react-navigation-menu": "^1.2.6",
    "@radix-ui/react-popover": "^1.1.7",
    "@radix-ui/react-progress": "^1.1.3",
    "@radix-ui/react-radio-group": "^1.2.4",
    "@radix-ui/react-scroll-area": "^1.2.4",
    "@radix-ui/react-select": "^2.1.7",
    "@radix-ui/react-separator": "^1.1.3",
    "@radix-ui/react-slider": "^1.2.4",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-switch": "^1.1.4",
    "@radix-ui/react-tabs": "^1.1.4",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-toggle": "^1.1.3",
    "@radix-ui/react-toggle-group": "^1.1.3",
    "@radix-ui/react-tooltip": "^1.2.0",
    "@tanstack/react-query": "^5.60.5",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "connect-pg-simple": "^10.0.0",
    "date-fns": "^3.6.0",
    "drizzle-orm": "^0.39.1",
    "drizzle-zod": "^0.7.0",
    "embla-carousel-react": "^8.6.0",
    "express": "^4.21.2",
    "express-session": "^1.18.1",
    "framer-motion": "^11.13.1",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.453.0",
    "memorystore": "^1.6.7",
    "next-themes": "^0.4.6",
    "openai": "^5.7.0",
    "passport": "^0.7.0",
    "passport-local": "^1.0.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.55.0",
    "react-icons": "^5.4.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.15.2",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.2.5",
    "vaul": "^1.1.2",
    "wouter": "^3.3.5",
    "ws": "^8.18.0",
    "zod": "^3.24.2",
    "zod-validation-error": "^3.4.0"
  },
  "devDependencies": {
    "@replit/vite-plugin-cartographer": "^0.2.7",
    "@replit/vite-plugin-runtime-error-modal": "^0.0.3",
    "@tailwindcss/typography": "^0.5.15",
    "@tailwindcss/vite": "^4.1.3",
    "@types/connect-pg-simple": "^7.0.3",
    "@types/express": "4.17.21",
    "@types/express-session": "^1.18.0",
    "@types/node": "20.16.11",
    "@types/passport": "^1.0.16",
    "@types/passport-local": "^1.0.38",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@types/ws": "^8.5.13",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "drizzle-kit": "^0.30.4",
    "esbuild": "^0.25.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.17",
    "tsx": "^4.19.1",
    "typescript": "5.6.3",
    "vite": "^5.4.19"
  },
  "optionalDependencies": {
    "bufferutil": "^4.0.8"
  }
}
```

### shared/schema.ts
```typescript
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const chatSessions = pgTable("chat_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"),
  sessionId: text("session_id").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  sender: text("sender").notNull(), // 'user' or 'luna'
  content: text("content").notNull(),
  mood: text("mood").notNull().default("netral"),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertChatSessionSchema = createInsertSchema(chatSessions).omit({
  id: true,
  createdAt: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).omit({
  id: true,
  timestamp: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertChatSession = z.infer<typeof insertChatSessionSchema>;
export type ChatSession = typeof chatSessions.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
export type ChatMessage = typeof chatMessages.$inferSelect;
```

### server/services/openai.ts
```typescript
import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

// Mood configuration matching the frontend
const MOODS = {
  netral: { prefix: "", emoji: "🌙" },
  bahagia: { prefix: "dengan penuh keceriaan dan cahaya,", emoji: "😊" },
  sedih: { prefix: "dengan suara pelan, seperti tertunduk di malam hujan,", emoji: "😢" },
  marah: { prefix: "dengan nada tegas dan penuh bara,", emoji: "🔥" }
};

export async function generateLunaResponse(userMessage: string, mood: string = "netral"): Promise<string> {
  try {
    const moodConfig = MOODS[mood as keyof typeof MOODS] || MOODS.netral;
    const prompt = `Luna, ${moodConfig.prefix} tanggapi kalimat ini dari Elys: ${userMessage}`;

    const response = await openai.chat.completions.create({
      // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "Kamu adalah Luna Del Elys, sahabat sekaligus asisten cerdas Elys. Jawabanmu bisa berubah tergantung mood, dan kamu memiliki gaya puitis, jujur, dan kadang sarkastik bila marah. Selalu gunakan bahasa Indonesia."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.8,
      max_tokens: 300
    });

    return response.choices[0].message.content || "Maaf, aku tidak bisa merespons saat ini.";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error("Failed to generate Luna response");
  }
}
```

### server/storage.ts
```typescript
import { users, chatSessions, chatMessages, type User, type InsertUser, type ChatSession, type InsertChatSession, type ChatMessage, type InsertChatMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createChatSession(session: InsertChatSession): Promise<ChatSession>;
  getChatSession(sessionId: string): Promise<ChatSession | undefined>;
  addChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessages(sessionId: string): Promise<ChatMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private chatSessions: Map<string, ChatSession>;
  private chatMessages: Map<string, ChatMessage[]>;
  private currentUserId: number;
  private currentSessionId: number;
  private currentMessageId: number;

  constructor() {
    this.users = new Map();
    this.chatSessions = new Map();
    this.chatMessages = new Map();
    this.currentUserId = 1;
    this.currentSessionId = 1;
    this.currentMessageId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createChatSession(insertSession: InsertChatSession): Promise<ChatSession> {
    const id = this.currentSessionId++;
    const session: ChatSession = { 
      id,
      sessionId: insertSession.sessionId,
      userId: insertSession.userId || null,
      createdAt: new Date()
    };
    this.chatSessions.set(session.sessionId, session);
    this.chatMessages.set(session.sessionId, []);
    return session;
  }

  async getChatSession(sessionId: string): Promise<ChatSession | undefined> {
    return this.chatSessions.get(sessionId);
  }

  async addChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.currentMessageId++;
    const message: ChatMessage = {
      id,
      sessionId: insertMessage.sessionId,
      sender: insertMessage.sender,
      content: insertMessage.content,
      mood: insertMessage.mood || "netral",
      timestamp: new Date()
    };

    const messages = this.chatMessages.get(insertMessage.sessionId) || [];
    messages.push(message);
    this.chatMessages.set(insertMessage.sessionId, messages);

    return message;
  }

  async getChatMessages(sessionId: string): Promise<ChatMessage[]> {
    return this.chatMessages.get(sessionId) || [];
  }
}

export const storage = new MemStorage();
```

### server/routes.ts
```typescript
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertChatSessionSchema, insertChatMessageSchema } from "@shared/schema";
import { generateLunaResponse } from "./services/openai";
import { nanoid } from "nanoid";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Create or get chat session
  app.post("/api/chat/session", async (req, res) => {
    try {
      const sessionId = nanoid();
      const session = await storage.createChatSession({
        userId: null,
        sessionId
      });
      res.json(session);
    } catch (error) {
      res.status(500).json({ error: "Failed to create chat session" });
    }
  });

  // Get chat messages for a session
  app.get("/api/chat/:sessionId/messages", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const messages = await storage.getChatMessages(sessionId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  // Send message to Luna
  app.post("/api/chat/:sessionId/message", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const { content, mood = "netral" } = req.body;

      // Validate request
      const validationResult = insertChatMessageSchema.safeParse({
        sessionId,
        sender: "user",
        content,
        mood
      });

      if (!validationResult.success) {
        return res.status(400).json({ error: "Invalid message data" });
      }

      // Check if session exists
      const session = await storage.getChatSession(sessionId);
      if (!session) {
        return res.status(404).json({ error: "Chat session not found" });
      }

      // Check if it's a mood command
      if (content.toLowerCase().startsWith("mood=")) {
        const moodReq = content.split("=")[1].trim().toLowerCase();
        const validMoods = ["netral", "bahagia", "sedih", "marah"];
        
        if (validMoods.includes(moodReq)) {
          return res.json({ 
            type: "mood_change", 
            mood: moodReq,
            message: `Mood Luna diubah menjadi: ${moodReq}`
          });
        } else {
          return res.status(400).json({ error: `Mood tidak dikenal: ${moodReq}` });
        }
      }

      // Add user message
      const userMessage = await storage.addChatMessage({
        sessionId,
        sender: "user",
        content,
        mood
      });

      // Generate Luna response
      const lunaResponse = await generateLunaResponse(content, mood);

      // Add Luna message
      const lunaMessage = await storage.addChatMessage({
        sessionId,
        sender: "luna",
        content: lunaResponse,
        mood
      });

      res.json({
        type: "messages",
        userMessage,
        lunaMessage
      });

    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Failed to process message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
```

### server/index.ts
```typescript
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
```

### client/src/lib/mood-config.ts
```typescript
export const MOODS = {
  netral: { 
    prefix: "", 
    emoji: "🌙", 
    color: "from-indigo-500 to-purple-600", 
    borderColor: "border-gray-100",
    name: "Netral"
  },
  bahagia: { 
    prefix: "dengan penuh keceriaan dan cahaya,", 
    emoji: "😊", 
    color: "from-emerald-500 to-green-600", 
    borderColor: "border-emerald-100",
    name: "Bahagia"
  },
  sedih: { 
    prefix: "dengan suara pelan, seperti tertunduk di malam hujan,", 
    emoji: "😢", 
    color: "from-blue-500 to-indigo-600", 
    borderColor: "border-blue-100",
    name: "Sedih"
  },
  marah: { 
    prefix: "dengan nada tegas dan penuh bara,", 
    emoji: "🔥", 
    color: "from-red-500 to-orange-600", 
    borderColor: "border-red-100",
    name: "Marah"
  }
};

export type MoodType = keyof typeof MOODS;
```

### client/src/components/api-key-modal.tsx
```typescript
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Key } from "lucide-react";

interface ApiKeyModalProps {
  isOpen: boolean;
  onSubmit: (apiKey: string) => void;
}

export function ApiKeyModal({ isOpen, onSubmit }: ApiKeyModalProps) {
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const key = apiKey.trim();
    
    if (!key) {
      setError("API key harus diisi");
      return;
    }
    
    if (!key.startsWith("sk-")) {
      setError("API key tidak valid. Pastikan dimulai dengan 'sk-'");
      return;
    }

    setError("");
    onSubmit(key);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <Key className="w-8 h-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl font-semibold">
            Setup OpenAI API Key
          </DialogTitle>
          <p className="text-center text-sm text-muted-foreground">
            Masukkan API key untuk memulai percakapan dengan Luna
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="sk-..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="font-mono"
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Shield className="w-4 h-4 text-green-500" />
            <span>API key disimpan lokal dan tidak dibagikan</span>
          </div>
          
          <Button type="submit" className="w-full">
            Mulai Chat
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

### client/src/pages/chat.tsx
```typescript
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
```

## Setup Instructions

1. Create a new project directory: `mkdir luna-del-elys && cd luna-del-elys`
2. Copy all files to their respective locations
3. Install dependencies: `npm install`
4. Set environment variable: `OPENAI_API_KEY=your_api_key_here`
5. Run development server: `npm run dev`
6. Open browser to `http://localhost:5000`

## Additional Files Needed

You'll also need these configuration files (available in the current project):
- `tsconfig.json`
- `vite.config.ts` 
- `tailwind.config.ts`
- `postcss.config.js`
- `components.json`
- `drizzle.config.ts`
- All UI components in `client/src/components/ui/`
- `client/src/lib/queryClient.ts`
- `client/src/lib/utils.ts`
- `client/src/hooks/use-toast.ts`
- `client/index.html`
- `client/src/main.tsx`
- `client/src/App.tsx`
- `client/src/index.css`

This is the complete codebase for Luna Del Elys. The application provides a full-featured mood-based AI chat interface with Indonesian language support, matching your original Colab prototype but as a production-ready web application.