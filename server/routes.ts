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
