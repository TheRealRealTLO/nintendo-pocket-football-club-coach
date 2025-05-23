
import React from 'react';
import { CardCategory } from '@/data/types';
import { allCategories, categoryColors } from '@/data/combos';
import { Shield, Wrench, Dumbbell, Users } from 'lucide-react';
import { tokens } from '@/styles/tokens';

interface CategoryFilterProps {
  activeCategory: CardCategory | "All";
  setActiveCategory: (category: CardCategory | "All") => void;
}

// Get icon component based on category
export const getCategoryIcon = (category: CardCategory) => {
  switch (category) {
    case "Tactical": return <Shield size={16} className="text-black" />;
    case "Technical": return <Wrench size={16} className="text-black" />;
    case "Physical": return <Dumbbell size={16} className="text-black" />;
    case "Support": return <Users size={16} className="text-black" />;
    default: return null;
  }
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-4">
      <p className={`${tokens.fontWeight.pixel} ${tokens.fontSize.xs} mb-2`}>Filter by category:</p>
      <div className="flex flex-wrap gap-2 justify-start">
        <button
          onClick={() => setActiveCategory("All")}
          className={`${activeCategory === "All" ? "bg-black text-white" : "bg-gray-200"} px-3 py-1 rounded-sm ${tokens.fontWeight.pixel} ${tokens.fontSize.xs}`}
        >
          All
        </button>
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${categoryColors[category]} flex items-center gap-1 px-3 py-1 rounded-sm ${tokens.fontWeight.pixel} ${tokens.fontSize.xs} ${activeCategory === category ? "ring-2 ring-black" : ""}`}
          >
            {getCategoryIcon(category)}
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
