
import { TrainingCombo } from '../../../types';

// Midfielder-specific attacking combos
export const midfielderAttackingCombos: TrainingCombo[] = [
  {
    id: "combo-16",
    name: "Midfield Strike",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Weights", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Kicking: 14,
      Toughness: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-46",
    name: "Super Long Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Kicking", quantity: 1 },
      { type: "Gaming", quantity: 1 }
    ],
    stats: {
      Kicking: 8,
      Technique: 1,
      Toughness: 4,
      Willpower: 4
    },
    recommendedPosition: "MF"
  }
];
