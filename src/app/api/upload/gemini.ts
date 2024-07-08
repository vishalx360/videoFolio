import fs from 'fs/promises';
import path from 'node:path';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

export const GetSlideData = async (resume: string) => {
    const model = new ChatGoogleGenerativeAI({
        apiKey: process.env.GEMINI_API_KEY,
        model: "gemini-pro",
        maxOutputTokens: 2048,
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
          },
        ],
      });
    const systemPrompt = await fs.readFile(path.resolve('src/app/api/upload/systemPrompt.txt'), 'utf8');

    const prompt = `
    Here is the content for the resume:
    ${resume}

    make sure to only reply with JSON.
    `;
   
    const res =  await model.invoke([
        ["system", systemPrompt],
        ["human", prompt],
    ]);
    return res.content;
};
