
import { TrainingCombo } from '../../../types';
import { defenderCombos } from './defenderCombos';
import { aerialCombos } from './aerialCombos';

// Combine all defense and aerial combos into a single array
export const defenseAerialCombos: TrainingCombo[] = [
  ...defenderCombos,
  ...aerialCombos
];
