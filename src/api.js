import axios from 'axios';

const API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export async function fetchAIResponse(prompt) {
  try {
    const response = await axios.post(
      API_ENDPOINT,
      {
        prompt: `You are NelsonBot, an AI assistant based on the Nelson Textbook of Pediatrics. ${prompt}`,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching AI response:', error);
    throw error;
  }
}