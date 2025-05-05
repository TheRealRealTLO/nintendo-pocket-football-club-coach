
import { rawComboData } from './rawComboData';
import { processComboData } from './processComboData';

// Process the raw combo data into properly formatted combo arrays
export const processedCombos = processComboData(rawComboData);

// Export the processed combos
export const {
  goalkeeperCombos,
  defenderCombos,
  midfielderCombos,
  forwardCombos,
  allPositionCombos
} = processedCombos;
