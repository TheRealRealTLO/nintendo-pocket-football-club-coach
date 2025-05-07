
import React from 'react';
import { StatType } from '../../data/combos';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpDown } from 'lucide-react';
import { allStatTypes } from '@/data/types';

interface AdvancedFiltersProps {
  positionFilter: string | null;
  setPositionFilter: (position: string | null) => void;
  selectedStat: StatType | null;
  sortDirection: 'asc' | 'desc';
  setSelectedStat: (stat: StatType | null, toggleSort?: boolean) => void;
  recommendedOnly?: boolean;
  setRecommendedOnly?: (value: boolean) => void;
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({
  positionFilter,
  setPositionFilter,
  selectedStat,
  sortDirection,
  setSelectedStat,
  recommendedOnly = false,
  setRecommendedOnly = () => {}
}) => {
  const positions = ["ALL", "GK", "DF", "MF", "FW"];
  
  return (
    <div className="p-4 bg-gray-50 rounded-lg mb-4">
      <div className="flex flex-wrap gap-3 mb-3">
        <h3 className="text-sm font-pixel w-full mb-2">Position Filter:</h3>
        {positions.map(position => (
          <Button
            key={position}
            variant={positionFilter === position ? "default" : "outline"}
            onClick={() => setPositionFilter(positionFilter === position ? null : position)}
            className="h-8 px-3 text-xs font-pixel"
          >
            {position}
          </Button>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-3 mb-3">
        <h3 className="text-sm font-pixel w-full mb-2">Stat Filter:</h3>
        {allStatTypes.map(stat => (
          <Badge
            key={stat}
            variant={selectedStat === stat ? "default" : "outline"}
            className={`cursor-pointer font-pixel py-1 px-3 flex items-center gap-1 ${
              selectedStat === stat ? 'bg-npfc-green-dark text-white' : 'hover:bg-gray-100'
            }`}
            onClick={() => setSelectedStat(stat, true)}
          >
            {stat}
            {selectedStat === stat && (
              <ArrowUpDown className="h-3 w-3 ml-1" data-direction={sortDirection} />
            )}
          </Badge>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-4">
        <h3 className="text-sm font-pixel">Recommended Combos:</h3>
        <Button
          variant={recommendedOnly ? "default" : "outline"}
          onClick={() => setRecommendedOnly(!recommendedOnly)}
          className="h-8 px-3 text-xs font-pixel"
        >
          {recommendedOnly ? "Showing Recommended Only" : "Show All Combos"}
        </Button>
      </div>
    </div>
  );
};

export default AdvancedFilters;
