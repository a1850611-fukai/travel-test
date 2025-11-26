import { GoogleGenAI } from "@google/genai";
import { WeatherData } from '../types';

export const getWeather = async (): Promise<WeatherData> => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.warn("No API Key found (process.env.API_KEY). Returning mock weather.");
    return {
      temp: "32°C",
      condition: "Sunny (Demo)",
      location: "Bangkok"
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';
    
    // We use the Google Search tool to get real-time info
    const response = await ai.models.generateContent({
      model,
      contents: "What is the current temperature and short weather condition in Bangkok right now?",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text;
    
    // Extract grounding source URL if available
    let sourceUrl: string | undefined;
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks) {
      for (const chunk of chunks) {
        if (chunk.web?.uri) {
          sourceUrl = chunk.web.uri;
          break;
        }
      }
    }
    
    return {
      temp: "Current",
      condition: text && text.length < 100 ? text : "Check Local Forecast", 
      location: "Bangkok",
      sourceUrl
    };

  } catch (error) {
    console.error("Gemini Weather Fetch Error:", error);
    return {
      temp: "--",
      condition: "Unavailable",
      location: "Bangkok"
    };
  }
};