
import React, { useState } from 'react';
import { TrainingCombo, StatType } from '../data/combos';
import { toast } from '@/components/ui/use-toast';
import FilterBadges from './combo-list/FilterBadges';
import AdvancedFilters from './combo-list/AdvancedFilters';
import ComboTabsContainer from './combo-list/ComboTabsContainer';
import HeaderSection from './combo-list/HeaderSection';
import { useComboFiltering } from './combo-list/useComboFiltering';

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
    processedFilteredCombos,
    allFilteredCombos
  } = useComboFiltering(availableCombos, filteredCombos, selectedStat, sortDirection);

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

      <FilterBadges 
        selectedStat={selectedStat}
        sortDirection={sortDirection}
        setSelectedStat={setSelectedStatWithToggle}
      />

      <AdvancedFilters
        positionFilter={positionFilter}
        setPositionFilter={setPositionFilter}
      />

      <ComboTabsContainer
        availableCombos={availableCombos}
        filteredCombos={processedFilteredCombos}
        allFilteredCombos={allFilteredCombos}
        selectedStat={!!selectedStat}
        onApplyCombo={handleApplyCombo}
      />
    </div>
  );
};

export default ComboList;
