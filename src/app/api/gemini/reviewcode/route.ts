// app/api/gemini/reviewcode/route.ts

import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, StreamingTextResponse } from 'ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        // Extract the `prompt` from the body of the request
        const body = await req.json();
        const { prompt } = body;

        // Ask Google Generative AI for a review given the prompt
        const response = await genAI
            .getGenerativeModel({ model: 'gemini-pro' })
            .generateContentStream({
                contents: [{ role: 'user', parts: [{ text: prompt }] }],
            });

        // Convert the response into a friendly text-stream
        const stream = GoogleGenerativeAIStream(response);

        // Read the stream into a string
        const review = await new Response(stream).text();

        // Respond with the review
        return new Response(review, { status: 200 });
    } catch (error) {
        console.error("Error generating review:", error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

