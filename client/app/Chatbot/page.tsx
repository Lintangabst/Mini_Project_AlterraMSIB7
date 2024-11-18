"use client";

import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const App: React.FC = () => {
  const [inputUser, setInputUser] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<{
    role: "user" | "bot";
    message: string;
  }[]>([
    { role: "bot", message: "Halo! Aku MOODBOT, teman belajar matematika operasi bilanganmu." },
  ]);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const addChat = (role: "user" | "bot", message: string): void => {
    setChatHistory((prev) => [...prev, { role, message }]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputUser(e.target.value);
  };

  const handleGenerate = (): void => {
    if (inputUser.trim()) {
      addChat("user", inputUser);
      generateText(inputUser);
      setInputUser("");
    }
  };

  const generateText = async (userInput: string): Promise<void> => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string;

    if (!apiKey) {
      console.error("API key is missing. Please set it in .env.local");
      addChat("bot", "Error: API key is not configured.");
      return;
    }

    const formattedChatHistory = chatHistory
      .map(
        (chat) =>
          `${chat.role === "user" ? "Pengguna" : "MOODBOT"}: ${chat.message}`
      )
      .join("\n");

    const prompt = `
      Kamu adalah chatbot matematika bernama MOODBOT yang ramah untuk anak-anak. 
      Tugasmu adalah menjawab pertanyaan dengan cara yang sederhana dan menyenangkan, 
      memberikan soal, memeriksa jawaban, dan memberikan penjelasan jika perlu.
      Berikut adalah riwayat percakapan sebelumnya:
      ${formattedChatHistory}
      
      Input terbaru dari pengguna:
      Pengguna: ${userInput}

      Responmu harus sesuai konteks percakapan sebelumnya.
    `;

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const generationConfig = {
        maxOutputTokens: 1000,
        temperature: 1,
      };

      const chatSession = model.startChat({
        generationConfig,
      });

      const result = await chatSession.sendMessage(prompt);
      addChat("bot", result.response.text());
    } catch (error) {
      console.error("Error generating text:", error);
      addChat("bot", "Error: Unable to process your request.");
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-6 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold drop-shadow-lg">MOODBOT - Teman Matematika</h1>
      </header>

      <div
        ref={chatContainerRef}
        className="flex-1 bg-white overflow-auto p-4 space-y-4"
      >
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`${
                chat.role === "user"
                  ? "text-white bg-blue-500"
                  : "text-gray-800 bg-gray-200"
              } p-4 rounded-xl max-w-md shadow`}
            >
              {chat.message}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="w-full flex items-center justify-center mt-4 p-4">
        <div className="flex items-center space-x-4 w-full max-w-2xl">
          <input
            type="text"
            value={inputUser}
            onChange={handleInputChange}
            placeholder="Ketik pertanyaan matematika..."
            className="flex-1 bg-gray-200 text-gray-800 rounded-md px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleGenerate}
            className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
