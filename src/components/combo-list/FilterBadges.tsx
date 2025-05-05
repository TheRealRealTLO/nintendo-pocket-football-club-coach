
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { StatType, allStatTypes, statColors } from '../../data/combos';
import { ChevronDown, ChevronUp, Filter, Tag } from 'lucide-react';

interface FilterBadgesProps {
  selectedStat: StatType | null;
  sortDirection: 'asc' | 'desc';
  setSelectedStat: (stat: StatType | null, toggleSort?: boolean) => void;
}

// Helper function to get the appropriate icon for each stat type
const getStatIcon = (stat: StatType) => {
  switch(stat) {
    case "Kicking": return <Tag size={14} className="text-black" />;
    case "Speed": return <ChevronUp size={14} className="text-black" />;
    case "Stamina": return <Filter size={14} className="text-black" />;
    case "Technique": return <Tag size={14} className="text-black" />;
    case "Toughness": return <Filter size={14} className="text-black" />;
    case "Jumping": return <ChevronUp size={14} className="text-black" />;
    case "Willpower": return <Tag size={14} className="text-black" />;
    default: return null;
  }
};

// Helper function to get the appropriate background color for each stat
const getStatBadgeColor = (stat: StatType) => {
  switch(stat) {
    case "Kicking": return "bg-npfc-red";
    case "Speed": return "bg-npfc-blue";
    case "Stamina": return "bg-npfc-green";
    case "Technique": return "bg-npfc-yellow";
    case "Toughness": return "bg-npfc-gray";
    case "Jumping": return "bg-npfc-purple";
    case "Willpower": return "bg-orange-400";
    default: return "bg-gray-200";
  }
};

export const FilterBadges: React.FC<FilterBadgesProps> = ({
  selectedStat,
  sortDirection,
  setSelectedStat
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-start">
      <Badge 
        className={`${!selectedStat ? 'bg-black text-white' : 'bg-gray-200'} cursor-pointer font-pixel text-xs flex items-center gap-1`}
        onClick={() => setSelectedStat(null)}
      >
        All
      </Badge>
      {allStatTypes.map((stat) => (
        <Badge
          key={stat}
          className={`cursor-pointer font-pixel text-xs ${getStatBadgeColor(stat)} ${
            selectedStat === stat ? 'ring-2 ring-black' : 'opacity-70'
          } flex items-center gap-1`}
          onClick={() => setSelectedStat(stat, true)}
        >
          {getStatIcon(stat)}
          {stat}
          {selectedStat === stat && (
            <span className="ml-1">
              {sortDirection === 'desc' ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
            </span>
          )}
        </Badge>
      ))}
    </div>
  );
};

export default FilterBadges;
