
import { TrainingCombo } from '../types';
import {
  attackingCombos,
  dribblePassCombos,
  defenseAerialCombos,
  midfieldCombos,
  specialCombos,
  teamSpiritCombos,
  goalkeeperCombos
} from './themes';

// Combine all themed combos into a single array
export const trainingCombos: TrainingCombo[] = [
  ...attackingCombos,
  ...dribblePassCombos,
  ...defenseAerialCombos,
  ...midfieldCombos,
  ...specialCombos,
  ...teamSpiritCombos,
  ...goalkeeperCombos
];
