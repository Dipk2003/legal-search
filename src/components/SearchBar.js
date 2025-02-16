import { useState } from "react";

const SearchBar = ({ onSearch }) => { // 🛠️ Ensure yeh prop pass ho raha hai
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    onSearch(query); // 🛠️ Call function provided by parent component
  };

  return (
    <form onSubmit={handleSearch} className="flex space-x-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search cases..."
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

