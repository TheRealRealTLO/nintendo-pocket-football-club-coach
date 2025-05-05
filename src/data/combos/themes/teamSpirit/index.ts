
import { TrainingCombo } from '../../../types';
import { allPositionTeamSpiritCombos } from './allPositionCombos';
import { positionSpecificTeamSpiritCombos } from './positionSpecificCombos';

// Combine all team spirit combos into a single array
export const teamSpiritCombos: TrainingCombo[] = [
  ...allPositionTeamSpiritCombos,
  ...positionSpecificTeamSpiritCombos
];
