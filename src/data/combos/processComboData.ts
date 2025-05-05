
import { TrainingCombo, StatType } from '../types';
import { parseComboString, parseStatValue, determinePosition, generateComboId } from './parseComboData';

export interface RawComboData {
  Name: string;
  Combo: string;
  Kicking: string | null;
  Speed: string | null;
  Stamina: string | null;
  Technique: string | null;
  Toughness: string | null;
  Jumping: string | null;
  Willpower: string | null;
}

export function processComboData(data: RawComboData[]): {
  goalkeeperCombos: TrainingCombo[];
  defenderCombos: TrainingCombo[];
  midfielderCombos: TrainingCombo[];
  forwardCombos: TrainingCombo[];
  allPositionCombos: TrainingCombo[];
} {
  const goalkeeperCombos: TrainingCombo[] = [];
  const defenderCombos: TrainingCombo[] = [];
  const midfielderCombos: TrainingCombo[] = [];
  const forwardCombos: TrainingCombo[] = [];
  const allPositionCombos: TrainingCombo[] = [];
  
  data.forEach((item, index) => {
    // Parse card requirements from combo string
    const cards = parseComboString(item.Combo);
    
    // Convert stat strings to numbers
    const stats: {[key in StatType]?: number} = {};
    if (item.Kicking) stats.Kicking = parseStatValue(item.Kicking);
    if (item.Speed) stats.Speed = parseStatValue(item.Speed);
    if (item.Stamina) stats.Stamina = parseStatValue(item.Stamina);
    if (item.Technique) stats.Technique = parseStatValue(item.Technique);
    if (item.Toughness) stats.Toughness = parseStatValue(item.Toughness);
    if (item.Jumping) stats.Jumping = parseStatValue(item.Jumping);
    if (item.Willpower) stats.Willpower = parseStatValue(item.Willpower);
    
    // Remove (GK) or (H) from name for display
    const cleanName = item.Name.replace(/\s*\([^)]*\)/, '');
    
    // Generate combo object
    const combo: TrainingCombo = {
      id: generateComboId(index),
      name: cleanName,
      cards,
      stats,
      recommendedPosition: determinePosition(item.Name)
    };
    
    // Add to the appropriate array based on position
    if (combo.recommendedPosition === "GK") {
      goalkeeperCombos.push(combo);
    } else if (combo.recommendedPosition === "DF") {
      defenderCombos.push(combo);
    } else if (combo.recommendedPosition === "MF") {
      midfielderCombos.push(combo);
    } else if (combo.recommendedPosition === "FW") {
      forwardCombos.push(combo);
    } else {
      allPositionCombos.push(combo);
    }
  });
  
  return {
    goalkeeperCombos,
    defenderCombos,
    midfielderCombos,
    forwardCombos,
    allPositionCombos
  };
}
