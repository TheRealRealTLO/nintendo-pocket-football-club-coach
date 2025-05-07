
import { useState, useMemo } from 'react';
import { TrainingCombo, StatType } from '../../data/combos';

export const useComboFiltering = (
  availableCombos: TrainingCombo[],
  filteredCombos: TrainingCombo[],
  selectedStat: StatType | null,
  sortDirection: 'asc' | 'desc' = 'desc'
) => {
  const [positionFilter, setPositionFilter] = useState<string | null>(null);
  const [recommendedOnly, setRecommendedOnly] = useState<boolean>(false);

  // Filter combos by position and recommended flag
  const processedFilteredCombos = useMemo(() => {
    let result = [...filteredCombos];

    // Apply position filter
    if (positionFilter) {
      if (positionFilter === 'ALL') {
        // Show all combos when ALL is selected
      } else if (positionFilter === 'GENERAL') {
        // Filter for combos without a specific position or marked as ALL
        result = result.filter(combo => 
          !combo.recommendedPosition || 
          combo.recommendedPosition === 'ALL'
        );
      } else {
        // Filter for specific positions
        result = result.filter(combo => 
          combo.recommendedPosition === positionFilter || 
          combo.recommendedPosition === 'ALL'
        );
      }
    }

    // Apply recommended filter
    if (recommendedOnly) {
      result = result.filter(combo => combo.recommended);
    }

    // Sort by stat value if a stat is selected
    if (selectedStat) {
      result.sort((a, b) => {
        const valueA = a.stats[selectedStat] || 0;
        const valueB = b.stats[selectedStat] || 0;
        return sortDirection === 'desc' ? valueB - valueA : valueA - valueB;
      });
    }

    return result;
  }, [filteredCombos, positionFilter, recommendedOnly, selectedStat, sortDirection]);

  // Same filtering but for all combos
  const allFilteredCombos = useMemo(() => {
    let result = [...availableCombos];

    // Apply position filter
    if (positionFilter) {
      if (positionFilter === 'ALL') {
        // Show all combos when ALL is selected
      } else if (positionFilter === 'GENERAL') {
        // Filter for combos without a specific position or marked as ALL
        result = result.filter(combo => 
          !combo.recommendedPosition || 
          combo.recommendedPosition === 'ALL'
        );
      } else {
        // Filter for specific positions
        result = result.filter(combo => 
          combo.recommendedPosition === positionFilter || 
          combo.recommendedPosition === 'ALL'
        );
      }
    }

    // Apply recommended filter
    if (recommendedOnly) {
      result = result.filter(combo => combo.recommended);
    }

    // Sort by stat value if a stat is selected
    if (selectedStat) {
      result.sort((a, b) => {
        const valueA = a.stats[selectedStat] || 0;
        const valueB = b.stats[selectedStat] || 0;
        return sortDirection === 'desc' ? valueB - valueA : valueA - valueB;
      });
    }

    return result;
  }, [availableCombos, positionFilter, recommendedOnly, selectedStat, sortDirection]);

  return {
    positionFilter,
    setPositionFilter,
    recommendedOnly,
    setRecommendedOnly,
    processedFilteredCombos,
    allFilteredCombos
  };
};
