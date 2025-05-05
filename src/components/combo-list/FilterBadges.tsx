
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { StatType, allStatTypes, statColors } from '../../data/combos';
import { getCategoryIcon } from '../card-inventory/CategoryFilter';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterBadgesProps {
  selectedStat: StatType | null;
  sortDirection: 'asc' | 'desc';
  setSelectedStat: (stat: StatType | null, toggleSort?: boolean) => void;
}

const getStatIcon = (stat: StatType) => {
  // For now, we'll use the same icons as categories since they're similar concepts
  switch(stat) {
    case "Kicking": return <ChevronUp size={16} className="text-black" />;
    case "Speed": return <ChevronDown size={16} className="text-black" />;
    default: return null;
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
        className={`${!selectedStat ? 'bg-black text-white' : 'bg-gray-200'} cursor-pointer`}
        onClick={() => setSelectedStat(null)}
      >
        All
      </Badge>
      {allStatTypes.map((stat) => (
        <Badge
          key={stat}
          className={`cursor-pointer ${statColors[stat]} ${
            selectedStat === stat ? 'ring-2 ring-black' : 'opacity-70'
          } flex items-center gap-1`}
          onClick={() => setSelectedStat(stat, true)}
        >
          {stat}
          {selectedStat === stat && (
            <span className="ml-1">
              {sortDirection === 'desc' ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </span>
          )}
        </Badge>
      ))}
    </div>
  );
};

export default FilterBadges;
