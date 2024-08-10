import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "sonner";

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        // Extract the prompt from the body of the request
        const { prompt } = await req.json();

        // Extract the API key from the Authorization header
        const authorizationHeader = req.headers.get("Authorization");
        if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
            return new Response('Unauthorized', { status: 401 });
        }
        const apiKey = authorizationHeader.split("Bearer ")[1];

        // Initialize the Google Generative AI client
        const genAI = new GoogleGenerativeAI(apiKey);

        // Ask Google Generative AI for a streaming completion given the prompt
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const result = await model.generateContent(prompt);

        console.log('Response:', result);
        const response = await result.response;
        const text = await response.text(); // Await the text here
        console.log(text);

        // Respond with the stream
        return new Response(text, {
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response('An error occurred', { status: 500 });
    }
}
