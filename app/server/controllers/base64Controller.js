import { encodeText, decodeText } from '../services/base64Service.js';

export const encodeTextController = (req, res) => {
  const { text } = req.body;
  const result = encodeText(text);
  res.json({ result });
};

export const decodeTextController = (req, res) => {
  const { text } = req.body;
  try {
    const result = decodeText(text);
    res.json({ result });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
