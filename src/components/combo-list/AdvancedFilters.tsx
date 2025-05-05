
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export type PositionFilter = "ALL" | "GK" | "DF" | "MF" | "FW" | null;
export type SortOption = "none" | "stat-high" | "stat-low";

interface AdvancedFiltersProps {
  positionFilter: PositionFilter;
  setPositionFilter: (position: PositionFilter) => void;
  sortOption: SortOption;
  setSortOption: (sort: SortOption) => void;
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({
  positionFilter,
  setPositionFilter,
  sortOption,
  setSortOption
}) => {
  return (
    <div className="mb-4 grid grid-cols-2 gap-2">
      <div>
        <p className="font-pixel text-xs mb-1">Position:</p>
        <Select value={positionFilter || undefined} onValueChange={(val) => setPositionFilter(val as PositionFilter)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Any Position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="null">Any Position</SelectItem>
            <SelectItem value="ALL">All Positions</SelectItem>
            <SelectItem value="GK">Goalkeeper</SelectItem>
            <SelectItem value="DF">Defender</SelectItem>
            <SelectItem value="MF">Midfielder</SelectItem>
            <SelectItem value="FW">Forward</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <p className="font-pixel text-xs mb-1">Sort by:</p>
        <Select value={sortOption} onValueChange={(val) => setSortOption(val as SortOption)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="No Sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Sorting</SelectItem>
            <SelectItem value="stat-high">Highest Stat First</SelectItem>
            <SelectItem value="stat-low">Lowest Stat First</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default AdvancedFilters;
