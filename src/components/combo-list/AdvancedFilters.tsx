
import React from 'react';
import { StatType } from '../../data/combos';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import { allStatTypes, statColors } from '@/data/combos';
import { useIsMobile } from '../../hooks/use-mobile';
import { tokens } from '@/styles/tokens';

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
  const positions = ["ALL", "GENERAL", "GK", "DF", "MF", "FW"];
  const isMobile = useIsMobile();

  // Helper function to get position color for both selected and unselected states
  const getPositionColor = (position: string, isSelected: boolean) => {
    if (!isSelected) {
      switch(position) {
        case "GK": return "bg-orange-300 bg-opacity-50 text-gray-700 " + tokens.badge.unselected;
        case "DF": return "bg-blue-300 bg-opacity-50 text-gray-700 " + tokens.badge.unselected;
        case "MF": return "bg-green-300 bg-opacity-50 text-gray-700 " + tokens.badge.unselected;
        case "FW": return "bg-red-300 bg-opacity-50 text-gray-700 " + tokens.badge.unselected;
        case "ALL": return "bg-purple-300 bg-opacity-50 text-gray-700 " + tokens.badge.unselected;
        case "GENERAL": return "bg-gray-300 bg-opacity-50 text-gray-700 " + tokens.badge.unselected;
        default: return "bg-gray-300 bg-opacity-50 text-gray-700 " + tokens.badge.unselected;
      }
    } else {
      switch(position) {
        case "GK": return "bg-orange-300 text-black " + tokens.badge.selected;
        case "DF": return "bg-blue-300 text-black " + tokens.badge.selected;
        case "MF": return "bg-green-300 text-black " + tokens.badge.selected;
        case "FW": return "bg-red-300 text-black " + tokens.badge.selected;
        case "ALL": return "bg-purple-300 text-black " + tokens.badge.selected;
        case "GENERAL": return "bg-gray-300 text-black " + tokens.badge.selected;
        default: return "bg-gray-300 text-black " + tokens.badge.selected;
      }
    }
  };
  
  return (
    <div className="p-4 bg-gray-50 rounded-lg mb-4">
      <div className="flex flex-wrap gap-2 mb-3">
        <h3 className={`${tokens.fontSize.sm} ${tokens.fontWeight.pixel} w-full mb-2`}>Position Filter:</h3>
        <div className="flex flex-wrap gap-2">
          {positions.map(position => (
            <Button
              key={position}
              variant="outline"
              onClick={() => setPositionFilter(positionFilter === position ? null : position)}
              className={`${tokens.button.sizes.sm} ${tokens.fontWeight.pixel} ${getPositionColor(position, positionFilter === position)}`}
              size="sm"
            >
              {position}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        <h3 className={`${tokens.fontSize.sm} ${tokens.fontWeight.pixel} w-full mb-2`}>Stat Filter:</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className={`${tokens.button.sizes.sm} ${tokens.fontWeight.pixel}
              ${!selectedStat 
                ? 'bg-purple-300 text-black ' + tokens.badge.selected 
                : 'bg-purple-300 bg-opacity-50 text-gray-700 ' + tokens.badge.unselected}`}
            size="sm"
            onClick={() => setSelectedStat(null, false)}
          >
            ALL
          </Button>
          {allStatTypes.map(stat => (
            <Button
              key={stat}
              variant="outline"
              className={`${tokens.button.sizes.sm} ${tokens.fontWeight.pixel} flex items-center gap-1
                ${selectedStat === stat 
                  ? statColors[stat] + ' text-black ' + tokens.badge.selected
                  : statColors[stat] + ' bg-opacity-50 text-gray-700 ' + tokens.badge.unselected
                }`}
              size="sm"
              onClick={() => setSelectedStat(stat, true)}
            >
              {isMobile && stat === 'Willpower' ? 'Will' : stat}
              {selectedStat === stat && (
                <ArrowUpDown className="h-3 w-3 ml-1" data-direction={sortDirection} />
              )}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-4">
        <h3 className={`${tokens.fontSize.sm} ${tokens.fontWeight.pixel}`}>Recommended Combos:</h3>
        <Button
          variant={recommendedOnly ? "default" : "outline"}
          onClick={() => setRecommendedOnly(!recommendedOnly)}
          className={`${tokens.button.sizes.sm} ${tokens.fontWeight.pixel}`}
          size="sm"
        >
          {recommendedOnly ? "Showing Recommended Only" : "Show All Combos"}
        </Button>
      </div>
    </div>
  );
};

export default AdvancedFilters;
