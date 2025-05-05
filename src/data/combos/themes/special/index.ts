
import { TrainingCombo } from '../../../types';
import { negativeStatCombos } from './negativeStatCombos';
import { specialAttackingCombos } from './attackingCombos';

// Combine all special combos into a single array
export const specialCombos: TrainingCombo[] = [
  ...negativeStatCombos,
  ...specialAttackingCombos
];
