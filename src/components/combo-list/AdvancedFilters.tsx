
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./CustomTabs";
import { StatType, allStatTypes, statColors } from '../../data/combos';
import { FilterBadges } from './FilterBadges';

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
  // Helper function to get position badge styles
  const getPositionBadgeStyles = (position: PositionFilter) => {
    const baseColor = getPositionColor(position);
    if (positionFilter === position) {
      return `${baseColor} ring-2 ring-black`;
    }
    return `${baseColor} opacity-70`;
  };

  return (
    <div className="mb-4 pixel-card p-3">
      <Tabs defaultValue="stat" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="stat" className="font-pixel text-xs">Stat Filters</TabsTrigger>
          <TabsTrigger value="position" className="font-pixel text-xs">Position Filters</TabsTrigger>
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
              className={`cursor-pointer ${positionFilter === null ? "bg-black text-white" : "bg-gray-200"}`} 
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdvancedFilters;
