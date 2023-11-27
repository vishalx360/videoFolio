import fs from 'fs/promises';
import { GooglePaLM } from "langchain/llms/googlepalm";
import path from 'node:path';

export const GetSlideData = async (resume: string) => {
    const model = new GooglePaLM({
        apiKey: process.env.GOOGLE_PALM_API_KEY
    });
    const systemPrompt = await fs.readFile(path.resolve('src/app/api/upload/systemPrompt.txt'), 'utf8');

    const prompt = `
    ${systemPrompt}

    Here is the content for the resume:
    ${resume}

    make sure to only reply with JSON.
    `;

    const res = await model.call(prompt);
    console.log(res);
    return res;
};
