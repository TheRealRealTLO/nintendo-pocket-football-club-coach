
import { TrainingCombo } from '../../../types';

// Special attacking combos
export const specialAttackingCombos: TrainingCombo[] = [
  {
    id: "combo-95",
    name: "Attack Pivot",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Kicking: 4,
      Stamina: 2,
      Technique: 2
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-208",
    name: "Goal Sniffer",
    cards: [
      { type: "Oil Therapy", quantity: 1 },
      { type: "Meditation", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Speed: 4,
      Technique: 3,
      Toughness: 3,
      Jumping: 4
    },
    recommendedPosition: "FW"
  }
];
