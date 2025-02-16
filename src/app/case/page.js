"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [cases, setCases] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`/api/cases/search?query=${encodeURIComponent(query)}`);
      const data = await response.json();
      setCases(data); // Update state with results
    } catch (error) {
      console.error("Error fetching cases:", error);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Find Legal Cases with AI</h1>
      <SearchBar onSearch={handleSearch} />

      <div className="mt-4">
        {cases.length > 0 ? (
          <ul>
            {cases.map((caseItem) => (
              <li key={caseItem._id} className="p-2 border-b">
                <h3 className="text-xl font-semibold">{caseItem.title}</h3>
                <p>{caseItem.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
