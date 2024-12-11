import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  result?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { input } = req.body; // Input from the frontend

    // Hugging Face API setup
    const model = "EleutherAI/gpt-neo-1.3B";
    const apiUrl = `https://api-inference.huggingface.co/models/${model}`;
    const apiKey = process.env.HUGGINGFACE_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Hugging Face API key is missing" });
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: input }),
      });

      const data = await response.json();

      if (response.ok && data) {
        res.status(200).json({ result: data.generated_text || "No response" });
      } else {
        res.status(500).json({ error: "Failed to generate text" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}