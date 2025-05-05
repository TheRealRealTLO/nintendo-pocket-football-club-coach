
import React from 'react';
import { Badge } from '@/components/ui/badge';

export type PositionFilter = "ALL" | "GK" | "DF" | "MF" | "FW" | null;

interface AdvancedFiltersProps {
  positionFilter: PositionFilter;
  setPositionFilter: (position: PositionFilter) => void;
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({
  positionFilter,
  setPositionFilter
}) => {
  // Helper function to get position badge color
  const getPositionBadgeStyles = (position: PositionFilter) => {
    if (positionFilter === position) {
      return "bg-primary text-primary-foreground hover:bg-primary/80";
    }
    return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
  };

  return (
    <div className="mb-4">
      <p className="font-pixel text-xs mb-2">Position:</p>
      <div className="flex flex-wrap gap-2">
        <Badge 
          className={`cursor-pointer ${getPositionBadgeStyles(null)}`} 
          onClick={() => setPositionFilter(null)}
        >
          Any Position
        </Badge>
        <Badge 
          className={`cursor-pointer ${getPositionBadgeStyles("ALL")}`} 
          onClick={() => setPositionFilter("ALL")}
        >
          General
        </Badge>
        <Badge 
          className={`cursor-pointer ${getPositionBadgeStyles("GK")}`} 
          onClick={() => setPositionFilter("GK")}
        >
          Goalkeeper
        </Badge>
        <Badge 
          className={`cursor-pointer ${getPositionBadgeStyles("DF")}`} 
          onClick={() => setPositionFilter("DF")}
        >
          Defender
        </Badge>
        <Badge 
          className={`cursor-pointer ${getPositionBadgeStyles("MF")}`} 
          onClick={() => setPositionFilter("MF")}
        >
          Midfielder
        </Badge>
        <Badge 
          className={`cursor-pointer ${getPositionBadgeStyles("FW")}`} 
          onClick={() => setPositionFilter("FW")}
        >
          Forward
        </Badge>
      </div>
    </div>
  );
};

export default AdvancedFilters;
