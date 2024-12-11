import { sendMessage } from './llamaApi';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { message } = req.body;
      const response = await sendMessage(message);
      res.status(200).json({ response });
    } catch (error) {
      res.status(500).json({ error: 'Error processing message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

