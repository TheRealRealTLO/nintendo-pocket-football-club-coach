
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { StatType, allStatTypes, statColors } from '../../data/combos';

interface FilterBadgesProps {
  selectedStat: StatType | null;
  sortDirection: 'asc' | 'desc';
  setSelectedStat: (stat: StatType | null, toggleSort?: boolean) => void;
}

export const FilterBadges: React.FC<FilterBadgesProps> = ({
  selectedStat,
  sortDirection,
  setSelectedStat
}) => {
  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-start">
        <Badge 
          className={`cursor-pointer ${!selectedStat ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedStat(null)}
        >
          All
        </Badge>
        {allStatTypes.map((stat) => (
          <Badge
            key={stat}
            className={`cursor-pointer ${statColors[stat]} ${
              selectedStat === stat ? `ring-2 ring-black ${
                sortDirection === 'desc' ? 'after:content-["↓"]' : 'after:content-["↑"]'
              }` : ''
            }`}
            onClick={() => setSelectedStat(stat, true)}
          >
            {stat}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default FilterBadges;
