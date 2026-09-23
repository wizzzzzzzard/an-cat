"use client";

import { useState } from 'react';

export default function CatFact() {
  const [fact, setFact] = useState<string>('Click the button to get a cat fact!');

  const fetchFact = async () => {
    try {
      const res = await fetch('https://catfact.ninja/fact');
      const data = await res.json();
      setFact(data.fact);
    } catch (e) {
      setFact('Failed to fetch cat fact.');
    }
  };

  return (
    <div className="text-center">
      <p className="mb-4 text-lg">{fact}</p>
      <button
        onClick={fetchFact}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        New Fact
      </button>
    </div>
  );
}
