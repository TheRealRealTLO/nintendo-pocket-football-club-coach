
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export type PositionFilter = "ALL" | "GK" | "DF" | "MF" | "FW" | null;

interface AdvancedFiltersProps {
  positionFilter: PositionFilter;
  setPositionFilter: (position: PositionFilter) => void;
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({
  positionFilter,
  setPositionFilter
}) => {
  return (
    <div className="mb-4">
      <p className="font-pixel text-xs mb-1">Position:</p>
      <Select value={positionFilter || undefined} onValueChange={(val) => setPositionFilter(val as PositionFilter)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Any Position" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="null">Any Position</SelectItem>
          <SelectItem value="ALL">General Training</SelectItem>
          <SelectItem value="GK">Goalkeeper</SelectItem>
          <SelectItem value="DF">Defender</SelectItem>
          <SelectItem value="MF">Midfielder</SelectItem>
          <SelectItem value="FW">Forward</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AdvancedFilters;
