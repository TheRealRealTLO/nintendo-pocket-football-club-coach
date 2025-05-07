
import React from 'react';
import { StatType } from '../../data/combos';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpDown } from 'lucide-react';
import { allStatTypes, statColors } from '@/data/combos';
import { useIsMobile } from '../../hooks/use-mobile';

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
  const isMobile = useIsMobile();

  const getPositionColor = (position: string, isSelected: boolean) => {
    if (!isSelected) return "bg-gray-200 hover:bg-gray-300 text-gray-700";
    
    switch(position) {
      case "GK": return "bg-orange-400 text-black";
      case "DF": return "bg-blue-400 text-black";
      case "MF": return "bg-green-400 text-black";
      case "FW": return "bg-red-400 text-black";
      case "ALL": return "bg-purple-400 text-black";
      default: return "bg-gray-400 text-black";
    }
  };
  
  return (
    <div className="p-4 bg-gray-50 rounded-lg mb-4">
      <div className="flex flex-wrap gap-2 mb-3">
        <h3 className="text-sm font-pixel w-full mb-2">Position Filter:</h3>
        <div className="flex flex-wrap gap-2">
          {positions.map(position => (
            <Button
              key={position}
              variant="outline"
              onClick={() => setPositionFilter(positionFilter === position ? null : position)}
              className={`h-8 px-3 text-xs font-pixel border-2 
                ${getPositionColor(position, positionFilter === position)}`}
              size="sm"
            >
              {position}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        <h3 className="text-sm font-pixel w-full mb-2">Stat Filter:</h3>
        <div className="flex flex-wrap gap-2">
          {allStatTypes.map(stat => (
            <Badge
              key={stat}
              className={`cursor-pointer font-pixel py-1 px-3 flex items-center gap-1 ${
                selectedStat === stat 
                  ? statColors[stat] 
                  : `bg-gray-200 text-gray-700 hover:bg-gray-300`
              }`}
              onClick={() => setSelectedStat(stat, true)}
            >
              {isMobile && stat === 'Willpower' ? 'Will' : stat}
              {selectedStat === stat && (
                <ArrowUpDown className="h-3 w-3 ml-1" data-direction={sortDirection} />
              )}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-4">
        <h3 className="text-sm font-pixel">Recommended Combos:</h3>
        <Button
          variant={recommendedOnly ? "default" : "outline"}
          onClick={() => setRecommendedOnly(!recommendedOnly)}
          className="h-8 px-3 text-xs font-pixel"
          size="sm"
        >
          {recommendedOnly ? "Showing Recommended Only" : "Show All Combos"}
        </Button>
      </div>
    </div>
  );
};

export default AdvancedFilters;
