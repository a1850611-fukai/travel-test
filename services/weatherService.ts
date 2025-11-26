import { GoogleGenAI } from "@google/genai";
import { WeatherData } from '../types';

export const getWeather = async (): Promise<WeatherData> => {
  let apiKey = '';
  
  // Safety check: In some static build environments (like standard Vite builds deployed to GH Pages),
  // `process` might not be defined in the browser runtime, causing a crash.
  try {
    if (typeof process !== 'undefined' && process.env) {
      apiKey = process.env.API_KEY || '';
    }
  } catch (e) {
    console.warn("process.env is not accessible");
  }
  
  if (!apiKey) {
    console.warn("No API Key found. Returning mock weather.");
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
    
    // Simple parsing logic since we can't force strict JSON with Search tool easily without schema mismatch risks on simple models
    // In a production app, we might ask for JSON specifically, but Search output is often natural language.
    // We will extract key info or just display the summary.
    
    return {
      temp: "Current",
      condition: text && text.length < 100 ? text : "Check Local Forecast", 
      location: "Bangkok"
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