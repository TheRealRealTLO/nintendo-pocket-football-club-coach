
import { TrainingCombo } from '../../types';
import { attackingCombos } from './attackingCombos';
import { dribblePassCombos } from './dribblePassCombos';
import { defenseAerialCombos } from './defenseAerialCombos';
import { midfieldCombos } from './midfieldCombos';
import { specialCombos } from './specialCombos';
import { teamSpiritCombos } from './teamSpiritCombos';
import { goalkeeperCombos } from './goalkeeperCombos';

// Export all themed combo arrays
export {
  attackingCombos,
  dribblePassCombos,
  defenseAerialCombos,
  midfieldCombos,
  specialCombos,
  teamSpiritCombos,
  goalkeeperCombos
};

// Group combos by position recommendation
export const groupCombosByPosition = () => {
  // Combine all combos from different themes
  const allCombos = [
    ...attackingCombos,
    ...dribblePassCombos,
    ...defenseAerialCombos,
    ...midfieldCombos,
    ...specialCombos,
    ...teamSpiritCombos,
    ...goalkeeperCombos
  ];
  
  // Group by position
  const gkCombos = allCombos.filter(combo => combo.recommendedPosition === 'GK');
  const dfCombos = allCombos.filter(combo => combo.recommendedPosition === 'DF');
  const mfCombos = allCombos.filter(combo => combo.recommendedPosition === 'MF');
  const fwCombos = allCombos.filter(combo => combo.recommendedPosition === 'FW');
  const allPositionCombos = allCombos.filter(combo => combo.recommendedPosition === 'ALL');
  
  return {
    goalkeeperCombos: gkCombos,
    defenderCombos: dfCombos,
    midfielderCombos: mfCombos,
    forwardCombos: fwCombos,
    allPositionCombos: allPositionCombos
  };
};
