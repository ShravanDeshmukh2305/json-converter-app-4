import React, { useState } from 'react';
import axios, { ENDPOINTS } from '../api/axiosInstance';

const Base64Tool = () => {
  const [inputText, setInputText] = useState('');
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');

  const encodeText = async () => {
    try {
      const response = await axios.post(ENDPOINTS.ENCODE, { text: inputText });
      setEncoded(response.data.result);
      setDecoded('');
    } catch {
      setEncoded('Error encoding');
    }
  };

  const decodeText = async () => {
    try {
      
      const response = await axios.post(ENDPOINTS.DECODE, { text: encoded });
      setDecoded(response.data.result);
    } catch {
      setDecoded('Invalid Base64 string');
    }
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-full h-32 p-2 mb-2"
        placeholder="Enter text"
      />
      <div className="flex gap-2 mb-2">
        <button onClick={encodeText} className="primary">
          Encode
        </button>
        <button onClick={decodeText} className="primary" disabled={!encoded}>
          Decode
        </button>
      </div>
      <div>
        <p className="font-semibold">Encoded:</p>
        <textarea readOnly value={encoded} className="w-full h-20 p-2" />
        {encoded && (
          <button
            onClick={() => navigator.clipboard.writeText(encoded)}
            className="success mt-2"
          >
            Copy
          </button>
        )}
      </div>
      <div className="mt-4">
        <p className="font-semibold">Decoded:</p>
        <textarea readOnly value={decoded} className="w-full h-20 p-2" />
        {decoded && (
          <button
            onClick={() => navigator.clipboard.writeText(decoded)}
            className="success mt-2"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export default Base64Tool;