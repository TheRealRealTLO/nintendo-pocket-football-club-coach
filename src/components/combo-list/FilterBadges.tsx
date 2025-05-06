
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
    <div className="flex flex-wrap gap-2 justify-start">
      <Badge 
        className={`${!selectedStat ? 'bg-black text-white' : 'bg-gray-200'} cursor-pointer font-pixel text-xs`}
        onClick={() => setSelectedStat(null)}
      >
        All
      </Badge>
      {allStatTypes.map((stat) => (
        <Badge
          key={stat}
          className={`cursor-pointer font-pixel text-xs ${
            selectedStat === stat ? statColors[stat] : statColors[stat] + ' opacity-60'
          }`}
          onClick={() => setSelectedStat(stat, true)}
        >
          {stat}
        </Badge>
      ))}
    </div>
  );
};

export default FilterBadges;
