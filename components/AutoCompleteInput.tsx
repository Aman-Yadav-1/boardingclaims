import { useState, useEffect } from 'react';
import { fetchAirports } from '@/lib/airports';

export const AutocompleteInput = ({ 
  onSelect,
  placeholder,
  type = 'airport' 
}: {
  onSelect: (item: any) => void;
  placeholder: string;
  type?: string;
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  useEffect(() => {
    if (query.length >= 2) {
      // Debounced API call
      const timer = setTimeout(async () => {
        const results = await fetchAirports();
        setSuggestions(results);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [query]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder={placeholder}
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded-b shadow-lg">
          {suggestions.map((item: { id: string; name: string }) => (
            <li 
              key={item.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => onSelect(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};