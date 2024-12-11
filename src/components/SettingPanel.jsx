import React from 'react';
import '../styles/SettingsPanel.css';

function SettingsPanel({
  systemMessage,
  setSystemMessage,
  maxTokens,
  setMaxTokens,
  temperature,
  setTemperature,
  topP,
  setTopP
}) {
  return (
    <div className="settings-panel">
      <h3>Advanced Settings</h3>
      <div className="setting">
        <label htmlFor="system-message">System Message:</label>
        <textarea
          id="system-message"
          value={systemMessage}
          onChange={(e) => setSystemMessage(e.target.value)}
          placeholder="Enter system-level instructions here..."
        />
      </div>
      <div className="setting">
        <label htmlFor="max-tokens">Max Tokens:</label>
        <input
          type="range"
          id="max-tokens"
          min="1"
          max="500"
          value={maxTokens}
          onChange={(e) => setMaxTokens(Number(e.target.value))}
        />
        <span>{maxTokens}</span>
      </div>
      <div className="setting">
        <label htmlFor="temperature">Temperature:</label>
        <input
          type="range"
          id="temperature"
          min="0"
          max="1"
          step="0.1"
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
        />
        <span>{temperature}</span>
      </div>
      <div className="setting">
        <label htmlFor="top-p">Top P:</label>
        <input
          type="range"
          id="top-p"
          min="0"
          max="1"
          step="0.1"
          value={topP}
          onChange={(e) => setTopP(Number(e.target.value))}
        />
        <span>{topP}</span>
      </div>
    </div>
  );
}

export default SettingsPanel;

