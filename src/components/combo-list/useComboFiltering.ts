
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
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter combos by position, recommended flag, and search term
  const processedFilteredCombos = useMemo(() => {
    let result = [...filteredCombos];

    // Apply position filter
    if (positionFilter) {
      if (positionFilter === 'ALL') {
        // Show all combos when ALL is selected, including general ones
      } else if (positionFilter === 'GENERAL') {
        // Filter to show ONLY combos without a specific position or marked as general
        result = result.filter(combo => 
          !combo.recommendedPosition || 
          combo.recommendedPosition === 'ALL'
        );
      } else {
        // Filter for specific positions, EXCLUDING general combos
        result = result.filter(combo => 
          combo.recommendedPosition === positionFilter
        );
      }
    }

    // Apply recommended filter
    if (recommendedOnly) {
      result = result.filter(combo => combo.recommended);
    }

    // Apply search term filter
    if (searchTerm.trim()) {
      const searchTermLower = searchTerm.toLowerCase().trim();
      result = result.filter(combo => 
        combo.name.toLowerCase().includes(searchTermLower) ||
        combo.cards.some(card => card.type.toLowerCase().includes(searchTermLower))
      );
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
  }, [filteredCombos, positionFilter, recommendedOnly, searchTerm, selectedStat, sortDirection]);

  // Same filtering but for all combos
  const allFilteredCombos = useMemo(() => {
    let result = [...availableCombos];

    // Apply position filter
    if (positionFilter) {
      if (positionFilter === 'ALL') {
        // Show all combos when ALL is selected, including general ones
      } else if (positionFilter === 'GENERAL') {
        // Filter to show ONLY combos without a specific position or marked as general
        result = result.filter(combo => 
          !combo.recommendedPosition || 
          combo.recommendedPosition === 'ALL'
        );
      } else {
        // Filter for specific positions, EXCLUDING general combos
        result = result.filter(combo => 
          combo.recommendedPosition === positionFilter
        );
      }
    }

    // Apply recommended filter
    if (recommendedOnly) {
      result = result.filter(combo => combo.recommended);
    }

    // Apply search term filter
    if (searchTerm.trim()) {
      const searchTermLower = searchTerm.toLowerCase().trim();
      result = result.filter(combo => 
        combo.name.toLowerCase().includes(searchTermLower) ||
        combo.cards.some(card => card.type.toLowerCase().includes(searchTermLower))
      );
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
  }, [availableCombos, positionFilter, recommendedOnly, searchTerm, selectedStat, sortDirection]);

  return {
    positionFilter,
    setPositionFilter,
    recommendedOnly,
    setRecommendedOnly,
    searchTerm,
    setSearchTerm,
    processedFilteredCombos,
    allFilteredCombos
  };
};
