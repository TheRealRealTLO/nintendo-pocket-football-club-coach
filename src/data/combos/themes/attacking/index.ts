
import { TrainingCombo } from '../../../types';
import { forwardAttackingCombos } from './forwardCombos';
import { midfielderAttackingCombos } from './midfielderCombos';

// Combine all attacking combos into a single array
export const attackingCombos: TrainingCombo[] = [
  ...forwardAttackingCombos,
  ...midfielderAttackingCombos
];
