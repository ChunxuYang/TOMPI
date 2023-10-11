import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// IMPORTANT! Set the runtime to edge: https://vercel.com/docs/functions/edge-functions/edge-runtime
export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  // Check if the OPENAI_API_KEY is set, if not return 400
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === "") {
    return new Response(
      "Missing OPENAI_API_KEY - make sure to add it to your .env file.",
      {
        status: 400,
      }
    );
  }

  let { prompt } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an AI writing assistant that give comments and modifications about typos, grammar error and other errors from the given paragraph. " +
          'Respond with a JSON object that contains the following fields: {"comment": "your comment", "modification": "your modification"}. ' +
          'If you have no comment or modification, respond with {"comment": "", "modification": ""}.' +
          "The modification field should base on the whole paragraph.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
