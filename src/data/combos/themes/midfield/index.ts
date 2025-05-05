
import { TrainingCombo } from '../../../types';
import { controlCombos } from './controlCombos';
import { tacticCombos } from './tacticCombos';
import { specialistCombos } from './specialistCombos';

// Combine all midfield combos into a single array
export const midfieldCombos: TrainingCombo[] = [
  ...controlCombos,
  ...tacticCombos,
  ...specialistCombos
];
