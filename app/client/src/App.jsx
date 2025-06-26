import React, { useState, useEffect } from 'react';
import JsonFormatter from './components/JsonFormatter';
import Base64Tool from './components/Base64Tool';
import JsonHistory from './components/JsonHistory';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  const [activeTab, setActiveTab] = useState('json');
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Apply or remove the "dark" class from the <body> element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="container">
      <div className="flex justify-end mb-4">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <h1>Dev Toolbox</h1>

      <div className="tabs">
        <button
          onClick={() => setActiveTab('json')}
          className={activeTab === 'json' ? 'active' : ''}
        >
          JSON Formatter
        </button>
        <button
          onClick={() => setActiveTab('base64')}
          className={activeTab === 'base64' ? 'active' : ''}
        >
          Base64 Tool
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={activeTab === 'history' ? 'active' : ''}
        >
          JSON History
        </button>
      </div>

      <div className="section">
        {activeTab === 'json' && <JsonFormatter />}
        {activeTab === 'base64' && <Base64Tool />}
        {activeTab === 'history' && <JsonHistory />}
      </div>
    </div>
  );
};

export default App;