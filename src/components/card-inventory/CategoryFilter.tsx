
import React from 'react';
import { CardCategory, allCategories, categoryColors } from '@/data/combos';
import { Star, Wrench, Activity, Users } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: CardCategory | "All";
  setActiveCategory: (category: CardCategory | "All") => void;
}

// Get icon component based on category
export const getCategoryIcon = (category: CardCategory) => {
  switch (category) {
    case "Tactical": return <Star size={16} className="text-black" />;
    case "Technical": return <Wrench size={16} className="text-black" />;
    case "Physical": return <Activity size={16} className="text-black" />;
    case "Support": return <Users size={16} className="text-black" />;
    default: return null;
  }
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-4">
      <p className="font-pixel text-xs mb-2">Filter by category:</p>
      <div className="flex flex-wrap gap-2 justify-start">
        <button
          onClick={() => setActiveCategory("All")}
          className={`${activeCategory === "All" ? "bg-black text-white" : "bg-gray-200"} px-3 py-1 rounded-sm font-pixel text-xs`}
        >
          All
        </button>
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${categoryColors[category]} flex items-center gap-1 px-3 py-1 rounded-sm font-pixel text-xs ${activeCategory === category ? "ring-2 ring-black" : ""}`}
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
