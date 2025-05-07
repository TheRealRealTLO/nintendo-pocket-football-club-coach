
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { tokens } from '@/styles/tokens';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  placeholder = "Search combos by name or card..."
}) => {
  return (
    <div className="relative mb-2">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-gray-500" />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`${tokens.fontWeight.pixel} pl-10 bg-white border-2 border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-300`}
      />
    </div>
  );
};

export default SearchBar;
