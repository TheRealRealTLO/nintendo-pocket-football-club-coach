
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { StatType, allStatTypes, statColors } from '../../data/combos';
import { useIsMobile } from '../../hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-wrap gap-2 justify-start">
      <Badge 
        className={`${!selectedStat ? 'bg-black text-white' : 'bg-gray-200 text-gray-700 opacity-70'} cursor-pointer font-pixel text-xs`}
        onClick={() => setSelectedStat(null)}
      >
        All
      </Badge>
      {allStatTypes.map((stat) => (
        <Badge
          key={stat}
          className={`cursor-pointer font-pixel text-xs ${
            selectedStat === stat 
              ? statColors[stat] 
              : `${statColors[stat]} opacity-60`
          }`}
          onClick={() => setSelectedStat(stat, true)}
        >
          {isMobile && stat === 'Willpower' ? 'Will' : stat}
        </Badge>
      ))}
    </div>
  );
};

export default FilterBadges;
