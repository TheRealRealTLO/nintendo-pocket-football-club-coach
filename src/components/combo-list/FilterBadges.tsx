
import React from 'react';
import { Button } from '@/components/ui/button';
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
      <Button
        variant="outline"
        className={`h-8 px-3 py-1 text-xs font-pixel border-2 
          ${!selectedStat ? 'bg-purple-400 text-black' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
        size="sm"
        onClick={() => setSelectedStat(null)}
      >
        ALL
      </Button>
      {allStatTypes.map((stat) => (
        <Button
          key={stat}
          variant="outline"
          className={`h-8 px-3 py-1 text-xs font-pixel border-2 
            ${selectedStat === stat 
              ? statColors[stat] + ' text-black'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          size="sm"
          onClick={() => setSelectedStat(stat, true)}
        >
          {isMobile && stat === 'Willpower' ? 'Will' : stat}
        </Button>
      ))}
    </div>
  );
};

export default FilterBadges;
