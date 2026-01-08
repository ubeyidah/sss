import { streamText, UIMessage, convertToModelMessages } from "ai";
import { systemPrompt } from "./prompt";
import { mistral } from "@ai-sdk/mistral";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    system: systemPrompt,
    model: mistral("magistral-small-2507"),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
