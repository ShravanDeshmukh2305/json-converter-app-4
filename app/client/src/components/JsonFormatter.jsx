import React, { useState } from 'react';
import axios, { ENDPOINTS } from '../api/axiosInstance';

const JsonFormatter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const formatJson = async () => {
    try {
      const response = await axios.post(ENDPOINTS.FORMAT_JSON, { json: input });
      setOutput(response.data.formatted);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid JSON');
      setOutput('');
    }
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-40 p-2 mb-2"
        placeholder="Enter raw JSON"
      />
      <button onClick={formatJson} className="primary mb-2">
        Format JSON
      </button>
      {error && <div className="error">{error}</div>}
      <textarea value={output} readOnly className="w-full h-40 p-2" />
      {output && (
        <button
          onClick={() => navigator.clipboard.writeText(output)}
          className="success mt-2"
        >
          Copy to Clipboard
        </button>
      )}
    </div>
  );
};

export default JsonFormatter;