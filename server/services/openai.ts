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
      max_tokens: 50.000
    });

    return response.choices[0].message.content || "Maaf, aku tidak bisa merespons saat ini.";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error("Failed to generate Luna response");
  }
}
