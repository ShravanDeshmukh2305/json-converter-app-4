import React, { useEffect, useState } from 'react';
import axios, { ENDPOINTS } from '../api/axiosInstance';

const JsonHistory = () => {
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const fetchHistory = async () => {
    try {
      const response = await axios.get(ENDPOINTS.GET_HISTORY);
      setHistory(response.data);
    } catch (err) {
      console.error('Failed to fetch history', err);
    }
  };

  const clearHistory = async () => {
    try {
      await axios.delete(ENDPOINTS.CLEAR_HISTORY);
      setHistory([]);
    } catch (err) {
      console.error('Failed to clear history', err);
    }
  };

  const downloadHistory = () => {
    const blob = new Blob([JSON.stringify(history, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'json-history.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const paginatedHistory = history.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(history.length / itemsPerPage);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Formatted JSON History</h2>
      <div className="flex gap-2 mb-4">
        <button onClick={clearHistory} className="danger">Clear History</button>
        <button onClick={downloadHistory} className="success">Download JSON</button>
      </div>
      {paginatedHistory.map((item, idx) => (
        <pre
          key={idx}
          className="p-2 mb-2 overflow-auto"
        >
          {item}
        </pre>
      ))}
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="secondary px-3 py-1 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-3 py-1">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="secondary px-3 py-1 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JsonHistory;