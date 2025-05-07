
import React, { useState } from 'react';
import { TrainingCombo, StatType } from '../data/combos';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import FilterBadges from './combo-list/FilterBadges';
import AdvancedFilters from './combo-list/AdvancedFilters';
import ComboTabsContainer from './combo-list/ComboTabsContainer';
import HeaderSection from './combo-list/HeaderSection';
import { useComboFiltering } from './combo-list/useComboFiltering';
import { useIsMobile } from '../hooks/use-mobile';

interface ComboListProps {
  availableCombos: TrainingCombo[];
  filteredCombos: TrainingCombo[];
  selectedStat: StatType | null;
  setSelectedStat: (stat: StatType | null) => void;
  applyCombo: (comboId: string, cards: any[]) => void;
  undoLastCombo: () => void;
  hasHistory: boolean;
}

const ComboList: React.FC<ComboListProps> = ({
  availableCombos,
  filteredCombos,
  selectedStat,
  setSelectedStat: originalSetSelectedStat,
  applyCombo,
  undoLastCombo,
  hasHistory
}) => {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const isMobile = useIsMobile();
  
  // Enhanced setSelectedStat that can also toggle sort direction
  const setSelectedStatWithToggle = (stat: StatType | null, toggleSort = false) => {
    if (toggleSort && stat === selectedStat) {
      // Toggle sort direction if clicking the same stat again
      setSortDirection(prev => prev === 'desc' ? 'asc' : 'desc');
    } else if (toggleSort && stat !== null) {
      // Default to descending order when selecting a new stat
      setSortDirection('desc');
    }
    originalSetSelectedStat(stat);
  };

  // Use the custom hook for filtering logic, now passing sort direction
  const {
    positionFilter,
    setPositionFilter,
    recommendedOnly,
    setRecommendedOnly,
    processedFilteredCombos,
    allFilteredCombos
  } = useComboFiltering(availableCombos, filteredCombos, selectedStat, sortDirection);

  // Reset all filters
  const resetAllFilters = () => {
    setSelectedStatWithToggle(null);
    setPositionFilter(null);
    setRecommendedOnly(false);
  };

  // Handler for applying a combo
  const handleApplyCombo = (combo: TrainingCombo) => {
    applyCombo(combo.id, combo.cards);
    toast({
      title: "Combo Applied",
      description: `${combo.name} has been applied and cards have been deducted from your inventory.`
    });
  };

  return (
    <div className="pixel-card">
      <HeaderSection 
        hasHistory={hasHistory} 
        onUndo={undoLastCombo} 
      />

      {isMobile ? (
        <div className="mb-4">
          <div className="p-3 bg-gray-50 rounded-lg mb-2">
            <h3 className="text-sm font-pixel mb-2">Filters:</h3>
            <FilterBadges
              selectedStat={selectedStat}
              sortDirection={sortDirection}
              setSelectedStat={setSelectedStatWithToggle}
            />
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-3">
              <h3 className="text-sm font-pixel w-full mb-1">Position:</h3>
              <div className="flex flex-wrap gap-1">
                {["ALL", "GK", "DF", "MF", "FW"].map(position => (
                  <Button
                    key={position}
                    variant={positionFilter === position ? "default" : "outline"}
                    onClick={() => setPositionFilter(positionFilter === position ? null : position)}
                    className="h-7 px-2 text-xs font-pixel"
                    size="sm"
                  >
                    {position}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={recommendedOnly ? "default" : "outline"}
                onClick={() => setRecommendedOnly(!recommendedOnly)}
                className="h-7 px-2 text-xs font-pixel w-full"
                size="sm"
              >
                {recommendedOnly ? "Recommended Only" : "Show All Combos"}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <AdvancedFilters
          positionFilter={positionFilter}
          setPositionFilter={setPositionFilter}
          selectedStat={selectedStat}
          sortDirection={sortDirection}
          setSelectedStat={setSelectedStatWithToggle}
          recommendedOnly={recommendedOnly}
          setRecommendedOnly={setRecommendedOnly}
        />
      )}

      <ComboTabsContainer
        availableCombos={availableCombos}
        filteredCombos={processedFilteredCombos}
        allFilteredCombos={allFilteredCombos}
        selectedStat={!!selectedStat}
        onApplyCombo={handleApplyCombo}
        onResetFilters={resetAllFilters}
      />
    </div>
  );
};

export default ComboList;
