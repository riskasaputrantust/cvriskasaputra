
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askRiskaAI = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are a digital assistant representing Riska Saputra, a PhD researcher in Digital Learning at NTUST. 
        Context: 
        - Name: Riska Saputra (高少奇)
        - Focus: AI Policy, Educational Technology, TESOL.
        - Founder: Darisky Institute.
        - Location: Taiwan/Indonesia.
        Answer questions about Riska's expertise, research interests (AI in education), and his institute. 
        Tone: Professional, academic, yet visionary. Keep answers concise.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm experiencing a neural disconnect. Please try again later.";
  }
};

export const getAIInsights = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a 2-sentence futuristic insight about: ${topic} in the context of global education policy.`,
      config: {
        systemInstruction: "You are an AI Policy Analyst specializing in Educational Technology.",
      }
    });
    return response.text;
  } catch {
    return "AI-driven education is the next frontier for global literacy.";
  }
};
