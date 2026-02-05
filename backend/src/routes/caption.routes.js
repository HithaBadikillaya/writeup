import express from "express";
import { buildPrompt } from "../utils/promptTemplates.js";
import { generateCaption } from "../services/hf.service.js";

const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const { platform, tone, content } = req.body;

    if (
      typeof platform !== "string" ||
      typeof tone !== "string" ||
      typeof content !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid input types. platform, tone, and content must be strings.",
      });
    }

    if (content.length > 500) {
      return res.status(400).json({
        success: false,
        message: "Content exceeds maximum length of 500 characters.",
      });
    }

    if (!platform || !tone || !content.trim()) {
      return res.status(400).json({
        success: false,
        message: "platform, tone, and content are required",
      });
    }

    const prompt = buildPrompt({ platform, tone, content });
    const caption = await generateCaption(prompt);

    res.json({
      success: true,
      caption,
    });
  } catch (error) {
    console.error("Caption Error:", error);
    res.status(500).json({
      success: false,
      message: "Caption generation failed. Please try again later.",
    });
  }
});

export default router;
