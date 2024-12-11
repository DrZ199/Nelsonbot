import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  response: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { message } = req.body
    // Here you would typically call your AI model or external API
    // For this example, we'll just echo the message
    const response = `You said: ${message}`
    res.status(200).json({ response })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

