// Created a simple API endpoint that returns a JSON response
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}