
import { groupCombosByPosition } from './themes';

// Get the processed combos directly from the themed organization
export const processedCombos = groupCombosByPosition();

// Export the processed combos
export const {
  goalkeeperCombos,
  defenderCombos,
  midfielderCombos,
  forwardCombos,
  allPositionCombos
} = processedCombos;
