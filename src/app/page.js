"use client";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`/api/cases/search?query=${query}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4">Find Legal Cases with AI</h1>
      
      {/* ✅ Fix: Ensure onSearch is passed */}
      <SearchBar onSearch={handleSearch} />

      <div className="mt-4">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((item) => (
              <li key={item._id} className="border p-2 mb-2">
                {item.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}
