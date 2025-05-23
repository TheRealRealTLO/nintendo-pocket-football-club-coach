
import { useState, useMemo } from 'react';
import { StatType, TrainingCombo, CardType, allStatTypes } from '../data/combos';
import { trainingCombos } from '../data/combos';
import { InventoryState } from './useInventory';

export function useCombos(inventory: InventoryState) {
  const [selectedStat, setSelectedStat] = useState<StatType | null>(null);

  // Determine which combos are available based on inventory
  const availableCombos = useMemo(() => {
    return trainingCombos.filter(combo => {
      // Check if all required cards are available in sufficient quantity
      return combo.cards.every(requirement => {
        return inventory.cards[requirement.type] >= requirement.quantity;
      });
    });
  }, [inventory.cards]);

  // Filter available combos by selected stat
  const filteredCombos = useMemo(() => {
    if (!selectedStat) {
      return availableCombos;
    }
    
    return availableCombos.filter(combo => {
      return combo.stats[selectedStat] !== undefined && combo.stats[selectedStat]! > 0;
    });
  }, [availableCombos, selectedStat]);

  // Get all combos that would improve a specific stat
  const getCombosByStat = (stat: StatType): TrainingCombo[] => {
    return trainingCombos.filter(combo => combo.stats[stat] && combo.stats[stat]! > 0);
  };

  // Check if a specific combo is available
  const isComboAvailable = (combo: TrainingCombo): boolean => {
    return combo.cards.every(requirement => {
      return inventory.cards[requirement.type] >= requirement.quantity;
    });
  };

  // Get all stats improved by combos
  const getStatImprovements = (combos: TrainingCombo[]): Record<StatType, number> => {
    return combos.reduce((stats, combo) => {
      allStatTypes.forEach(stat => {
        if (combo.stats[stat]) {
          stats[stat] = (stats[stat] || 0) + combo.stats[stat]!;
        }
      });
      return stats;
    }, {} as Record<StatType, number>);
  };

  // Calculate the number of each card required by a combo
  const getRequiredCards = (combo: TrainingCombo): Record<CardType, number> => {
    return combo.cards.reduce((acc, card) => {
      acc[card.type] = (acc[card.type] || 0) + card.quantity;
      return acc;
    }, {} as Record<CardType, number>);
  };

  // Get best combo for a specific stat
  const getBestComboForStat = (stat: StatType): TrainingCombo | null => {
    const statCombos = trainingCombos
      .filter(combo => combo.stats[stat] && combo.stats[stat]! > 0)
      .sort((a, b) => (b.stats[stat] || 0) - (a.stats[stat] || 0));
    
    return statCombos.length > 0 ? statCombos[0] : null;
  };

  return {
    availableCombos,
    filteredCombos,
    selectedStat,
    setSelectedStat,
    isComboAvailable,
    getStatImprovements,
    getRequiredCards,
    getCombosByStat,
    getBestComboForStat
  };
}
