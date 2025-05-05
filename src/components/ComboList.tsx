
import React from 'react';
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
  setSelectedStat,
  applyCombo,
  undoLastCombo,
  hasHistory
}) => {
  // Use the custom hook for filtering logic
  const {
    positionFilter,
    setPositionFilter,
    sortOption,
    setSortOption,
    processedFilteredCombos,
    allFilteredCombos
  } = useComboFiltering(availableCombos, filteredCombos, selectedStat);

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
        setSelectedStat={setSelectedStat}
      />

      <AdvancedFilters
        positionFilter={positionFilter}
        setPositionFilter={setPositionFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
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
