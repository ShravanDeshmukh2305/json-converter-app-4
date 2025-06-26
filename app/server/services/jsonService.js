import JsonEntry from '../models/JsonEntry.js';

export const formatJson = async (jsonString) => {
  const parsed = JSON.parse(jsonString);
  const formatted = JSON.stringify(parsed, null, 2);
  await JsonEntry.create({ content: formatted });
  return formatted;
};

export const getJsonHistory = async () => {
  const entries = await JsonEntry.find().sort({ createdAt: -1 }).limit(50);
  return entries.map(e => e.content);
};