
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./CustomTabs";
import { StatType, allStatTypes, statColors } from '../../data/combos';
import { FilterBadges } from './FilterBadges';
import { useIsMobile } from '@/hooks/use-mobile';

export type PositionFilter = "ALL" | "GK" | "DF" | "MF" | "FW" | null;

interface AdvancedFiltersProps {
  positionFilter: PositionFilter;
  setPositionFilter: (position: PositionFilter) => void;
  selectedStat: StatType | null;
  sortDirection: 'asc' | 'desc';
  setSelectedStat: (stat: StatType | null, toggleSort?: boolean) => void;
}

// Helper function to get position badge color
const getPositionColor = (position: PositionFilter) => {
  switch(position) {
    case "GK": return "bg-orange-400 text-black";
    case "DF": return "bg-blue-400 text-black";
    case "MF": return "bg-green-400 text-black";
    case "FW": return "bg-red-400 text-black";
    case "ALL": return "bg-purple-400 text-black";
    default: return "bg-gray-400 text-black";
  }
};

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({
  positionFilter,
  setPositionFilter,
  selectedStat,
  sortDirection,
  setSelectedStat
}) => {
  const isMobile = useIsMobile();
  
  // Helper function to get position badge styles
  const getPositionBadgeStyles = (position: PositionFilter) => {
    const baseColor = getPositionColor(position);
    if (positionFilter === position) {
      return `${baseColor} ring-2 ring-black`;
    }
    return `${baseColor} opacity-70`;
  };

  return (
    <div className="mb-4">
      <Tabs defaultValue="stat" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4 bg-gray-100 p-1 rounded-md">
          <TabsTrigger 
            value="stat" 
            className="font-pixel text-xs"
          >
            {isMobile ? "Stats" : "Stat Filters"}
          </TabsTrigger>
          <TabsTrigger 
            value="position" 
            className="font-pixel text-xs"
          >
            {isMobile ? "Positions" : "Position Filters"}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="stat" className="mt-0">
          <FilterBadges 
            selectedStat={selectedStat}
            sortDirection={sortDirection}
            setSelectedStat={setSelectedStat}
          />
        </TabsContent>
        
        <TabsContent value="position" className="mt-0">
          <div className="flex flex-wrap gap-2">
            <Badge 
              className={`cursor-pointer font-pixel text-xs flex items-center gap-1 ${positionFilter === null ? "bg-black text-white border-2 border-white" : "bg-gray-200 border-2 border-black"}`} 
              onClick={() => setPositionFilter(null)}
            >
              All
            </Badge>
            <Badge 
              className={`cursor-pointer font-pixel text-xs flex items-center gap-1 ${getPositionBadgeStyles("ALL")} border-2 border-black`} 
              onClick={() => setPositionFilter("ALL")}
            >
              General
            </Badge>
            <Badge 
              className={`cursor-pointer font-pixel text-xs flex items-center gap-1 ${getPositionBadgeStyles("GK")} border-2 border-black`} 
              onClick={() => setPositionFilter("GK")}
            >
              {isMobile ? "GK" : "Goalkeeper"}
            </Badge>
            <Badge 
              className={`cursor-pointer font-pixel text-xs flex items-center gap-1 ${getPositionBadgeStyles("DF")} border-2 border-black`} 
              onClick={() => setPositionFilter("DF")}
            >
              {isMobile ? "DF" : "Defender"}
            </Badge>
            <Badge 
              className={`cursor-pointer font-pixel text-xs flex items-center gap-1 ${getPositionBadgeStyles("MF")} border-2 border-black`} 
              onClick={() => setPositionFilter("MF")}
            >
              {isMobile ? "MF" : "Midfielder"}
            </Badge>
            <Badge 
              className={`cursor-pointer font-pixel text-xs flex items-center gap-1 ${getPositionBadgeStyles("FW")} border-2 border-black`} 
              onClick={() => setPositionFilter("FW")}
            >
              {isMobile ? "FW" : "Forward"}
            </Badge>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdvancedFilters;
