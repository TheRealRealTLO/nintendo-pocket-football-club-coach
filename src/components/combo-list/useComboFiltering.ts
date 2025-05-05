
import { useState, useMemo } from 'react';
import { TrainingCombo, StatType } from '../../data/combos';
import { trainingCombos } from '../../data/combos';
import { PositionFilter, SortOption } from './AdvancedFilters';

export const useComboFiltering = (
  availableCombos: TrainingCombo[],
  filteredCombos: TrainingCombo[],
  selectedStat: StatType | null
) => {
  const [positionFilter, setPositionFilter] = useState<PositionFilter>(null);
  const [sortOption, setSortOption] = useState<SortOption>("none");

  // Filter and sort combos based on selected filters
  const getFilteredAndSortedCombos = (combos: TrainingCombo[]) => {
    // First apply position filter if selected
    let result = combos;
    if (positionFilter) {
      // When a specific position (not null or "ALL") is selected, only show combos for that position
      // Exclude "ALL" position combos when a specific position filter is applied
      if (positionFilter !== "ALL") {
        result = result.filter(combo => 
          combo.recommendedPosition === positionFilter
        );
      } else {
        // When "ALL" position filter is selected, show both "ALL" position combos and those without position
        result = result.filter(combo => 
          combo.recommendedPosition === "ALL" || 
          !combo.recommendedPosition
        );
      }
    }
    
    // Then sort based on sort option
    if (sortOption !== "none" && selectedStat) {
      result = [...result].sort((a, b) => {
        const valueA = a.stats[selectedStat] || 0;
        const valueB = b.stats[selectedStat] || 0;
        return sortOption === "stat-high" ? valueB - valueA : valueA - valueB;
      });
    }
    
    return result;
  };

  // Get filtered and sorted combos
  const processedAvailableCombos = useMemo(() => 
    getFilteredAndSortedCombos(availableCombos), 
    [availableCombos, positionFilter, sortOption, selectedStat]
  );
  
  const processedFilteredCombos = useMemo(() => 
    getFilteredAndSortedCombos(filteredCombos),
    [filteredCombos, positionFilter, sortOption, selectedStat]
  );
  
  // Filter all combos by stat and position
  const allFilteredCombos = useMemo(() => {
    let result = trainingCombos;
    
    // Apply stat filter if selected
    if (selectedStat) {
      result = result.filter(combo => combo.stats[selectedStat] !== undefined && combo.stats[selectedStat]! > 0);
    }
    
    // Apply position filter if selected
    if (positionFilter) {
      // When a specific position (not null or "ALL") is selected, only show combos for that position
      // Exclude "ALL" position combos when a specific position filter is applied
      if (positionFilter !== "ALL") {
        result = result.filter(combo => 
          combo.recommendedPosition === positionFilter
        );
      } else {
        // When "ALL" position filter is selected, show both "ALL" position combos and those without position
        result = result.filter(combo => 
          combo.recommendedPosition === "ALL" || 
          !combo.recommendedPosition
        );
      }
    }
    
    // Apply sorting
    if (sortOption !== "none" && selectedStat) {
      result = [...result].sort((a, b) => {
        const valueA = a.stats[selectedStat] || 0;
        const valueB = b.stats[selectedStat] || 0;
        return sortOption === "stat-high" ? valueB - valueA : valueA - valueB;
      });
    }
    
    return result;
  }, [positionFilter, sortOption, selectedStat]);

  return {
    positionFilter,
    setPositionFilter,
    sortOption,
    setSortOption,
    processedAvailableCombos,
    processedFilteredCombos,
    allFilteredCombos
  };
};
