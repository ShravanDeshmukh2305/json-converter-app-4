import { formatJson, getJsonHistory } from '../services/jsonService.js';

export const formatJsonController = async (req, res) => {
  try {
    const formatted = await formatJson(req.body.json);
    res.json({ formatted });
  } catch (err) {
    res.status(400).json({ message: 'Invalid JSON' });
  }
};

export const getHistoryController = async (req, res) => {
  const entries = await getJsonHistory();
  res.json(entries);
};