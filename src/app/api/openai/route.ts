import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    // apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
    apiKey: 'my-openai-api-key-here' 
});

export const runtime = "edge";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { prompt } = body;

        if (!openai) {
            return new NextResponse('OpenAI API Key not configured', { status: 500 });
        }

        if (!prompt) {
            return new NextResponse('Prompt is required', { status: 400 });
        }

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            temperature: 1,
            messages: [{ role: 'user', content: prompt }],
        });
        
        let content = response.choices[0].message;
        console.log(content);

        return new NextResponse(JSON.stringify(content), { status: 200 });
    } catch (error) {
        console.error('[CONVERSATION_ERROR]', error);
        return new NextResponse('Internal error', { status: 500 });
    }
}