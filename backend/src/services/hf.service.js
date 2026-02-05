import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";
dotenv.config();

const HF_MODEL = "Qwen/Qwen2.5-7B-Instruct";

const hf = new HfInference(process.env.HF_API_KEY);

if (!process.env.HF_API_KEY) {
  console.warn("Warning: HF_API_KEY is missing via process.env");
}

export async function generateCaption(prompt) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const response = await hf.chatCompletion({
      model: HF_MODEL,
      messages: [{ role: "user", content: prompt }],
      max_tokens: 120,
      temperature: 0.7,
    }, { signal: controller.signal });

    clearTimeout(timeoutId);

    if (
      response &&
      Array.isArray(response.choices) &&
      response.choices.length > 0 &&
      response.choices[0].message &&
      typeof response.choices[0].message.content === "string"
    ) {
      return response.choices[0].message.content.trim();
    }

    throw new Error("Invalid response format from HF API");
  } catch (err) {
    clearTimeout(timeoutId);
    console.error("HF Service Error:", err);
    throw err;
  }
}
