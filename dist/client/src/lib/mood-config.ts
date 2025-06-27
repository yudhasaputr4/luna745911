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
    emoji: "🔥🤬", 
    color: "from-red-500 to-orange-600", 
    borderColor: "border-red-100",
    name: "Marah"
  }
};

export type MoodType = keyof typeof MOODS;
