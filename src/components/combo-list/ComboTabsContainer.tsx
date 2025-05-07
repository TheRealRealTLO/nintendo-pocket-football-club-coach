
import React from 'react';
import { TrainingCombo } from '../../data/combos';
import { Button } from '@/components/ui/button';
import CombosTab from './CombosTab';
import { Trophy, Search } from 'lucide-react';

interface ComboTabsContainerProps {
  availableCombos: TrainingCombo[];
  filteredCombos: TrainingCombo[];
  allFilteredCombos: TrainingCombo[];
  selectedStat: boolean;
  onApplyCombo: (combo: TrainingCombo) => void;
  onResetFilters: () => void;
  showAllCombos?: boolean;
}

const ComboTabsContainer: React.FC<ComboTabsContainerProps> = ({
  availableCombos,
  filteredCombos,
  allFilteredCombos,
  selectedStat,
  onApplyCombo,
  onResetFilters,
  showAllCombos = false
}) => {
  const recommendedCount = filteredCombos.filter(combo => combo.recommended).length;
  const isShowingRecommended = filteredCombos.every(combo => combo.recommended) && filteredCombos.length > 0;
  const isFiltered = filteredCombos.length !== (showAllCombos ? allFilteredCombos.length : availableCombos.length);
  
  return (
    <div>
      <div className="p-4 border-t">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
          <div className="flex flex-col">
            <h3 className="text-lg font-pixel">
              {showAllCombos ? "All Training Combos" : "Available Combos"} ({filteredCombos.length})
              {isShowingRecommended && (
                <span className="text-sm text-amber-700 flex items-center gap-1 mt-1">
                  <Trophy className="h-4 w-4 text-amber-500" /> 
                  Top stat-boosting combos only ({recommendedCount})
                </span>
              )}
              {isFiltered && filteredCombos.length > 0 && (
                <span className="text-sm text-purple-700 flex items-center gap-1 mt-1">
                  <Search className="h-4 w-4 text-purple-500" /> 
                  Filtered results
                </span>
              )}
            </h3>
          </div>
          <div className="flex gap-2 w-full md:w-auto justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={onResetFilters}
              className="font-pixel text-xs"
            >
              Reset Filters
            </Button>
          </div>
        </div>
        
        <CombosTab 
          combos={filteredCombos}
          availableCombos={availableCombos}
          selectedStat={selectedStat}
          onApplyCombo={onApplyCombo}
        />

        {filteredCombos.length === 0 && allFilteredCombos.length > 0 && (
          <div className="text-center p-6">
            <p className="text-gray-600 font-pixel">No combos match your current filters or search.</p>
            <Button 
              className="mt-2 font-pixel text-xs"
              onClick={onResetFilters}
              variant="outline"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComboTabsContainer;
