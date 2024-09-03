import { useState } from "react";

export default function ApiForm({ apiUrl, onSetApiUrl, onRemoveApiUrl, onClose }) {
  const [inputUrl, setInputUrl] = useState(apiUrl);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-md text-center z-50">
      <h2 className="text-xl font-bold mb-4">API URL Configuration</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter API URL"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <button
          onClick={() => onSetApiUrl(inputUrl)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Set URL
        </button>
        <button onClick={onRemoveApiUrl} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Remove URL
        </button>
      </div>
      <button onClick={onClose} className="bg-transparent text-black text-3xl py-2 px-4 rounded absolute top-0 right-0">
        &times;
      </button>
    </div>
  );
}
