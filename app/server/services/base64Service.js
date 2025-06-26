export const encodeText = (text) => {
  return Buffer.from(text, 'utf-8').toString('base64');
};

export const decodeText = (text) => {
  try {
    return Buffer.from(text, 'base64').toString('utf-8');
  } catch {
    throw new Error('Invalid Base64 string');
  }
};