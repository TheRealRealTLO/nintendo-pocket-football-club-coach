
import { TrainingCombo } from '../types';
import { goalkeeperCombos } from './goalkeeperCombos';
import { defenderCombos } from './defenderCombos';
import { midfielderCombos } from './midfielderCombos';
import { forwardCombos } from './forwardCombos';
import { allPositionCombos } from './allPositionCombos';

// Combine all combos into a single array
export const trainingCombos: TrainingCombo[] = [
  ...goalkeeperCombos,
  ...defenderCombos,
  ...midfielderCombos,
  ...forwardCombos,
  ...allPositionCombos
];
