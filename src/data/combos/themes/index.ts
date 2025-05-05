
import { TrainingCombo } from '../../types';
import { attackingCombos } from './attacking';
import { dribblePassCombos } from './dribblePass';
import { defenseAerialCombos } from './defense';
import { midfieldCombos } from './midfield';
import { specialCombos } from './special';
import { teamSpiritCombos } from './teamSpirit';
import { goalkeeperCombos } from './goalkeeper';
import { validateComboId } from './utils/comboValidator';

// Validate all combo IDs to catch any duplicates or conflicts
function validateAllCombos() {
  const allSourceFiles = {
    'attacking/index.ts': attackingCombos,
    'dribblePass/index.ts': dribblePassCombos,
    'defense/index.ts': defenseAerialCombos,
    'midfield/index.ts': midfieldCombos,
    'special/index.ts': specialCombos,
    'teamSpirit/index.ts': teamSpiritCombos,
    'goalkeeper/index.ts': goalkeeperCombos
  };

  // Check for duplicate IDs across all files
  Object.entries(allSourceFiles).forEach(([sourceFile, combos]) => {
    combos.forEach(combo => {
      validateComboId(combo, sourceFile);
    });
  });
}

// Run validation in development environment
if (process.env.NODE_ENV !== 'production') {
  validateAllCombos();
}

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
