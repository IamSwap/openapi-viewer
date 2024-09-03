"use client";

import { useState, useEffect } from "react";
import ApiForm from "@/components/ApiForm";
import ElementsApi from "@/components/ElementsApi";
import { getApiUrl, setApiUrl, removeApiUrl } from "@/lib/apiConfig";

export default function Home() {
  const [apiUrl, setApiUrlState] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setApiUrlState(getApiUrl());

    if (apiUrl) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  }, [apiUrl]);

  const handleSetApiUrl = (url) => {
    setApiUrl(url);
    setApiUrlState(url);
    setShowForm(false);
  };

  const handleRemoveApiUrl = () => {
    removeApiUrl();
    setApiUrlState("");
    setShowForm(false);
  };

  return (
    <div className="h-screen w-screen">
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <ApiForm
            apiUrl={apiUrl}
            onSetApiUrl={handleSetApiUrl}
            onRemoveApiUrl={handleRemoveApiUrl}
            onClose={() => setShowForm(false)}
          />
        </div>
      )}
      {apiUrl && <ElementsApi apiUrl={apiUrl} />}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="fixed bottom-5 right-5 z-50 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Change URL
        </button>
      )}
    </div>
  );
}
