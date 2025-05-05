
import { TrainingCombo } from '../../../types';

// Position-specific team spirit combos
export const positionSpecificTeamSpiritCombos: TrainingCombo[] = [
  {
    id: "combo-26",
    name: "Miracle Loop",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Shooting", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Kicking: 7,
      Technique: 2,
      Jumping: 8
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-67",
    name: "Long Throw",
    cards: [
      { type: "Weights", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 4,
      Toughness: 12,
      Jumping: 4
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-68",
    name: "Scissors Feint",
    cards: [
      { type: "Agility", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Speed: 4,
      Technique: 3,
      Jumping: 6
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-69",
    name: "Roulette Turn",
    cards: [
      { type: "Agility", quantity: 1 },
      { type: "Stretching", quantity: 1 },
      { type: "Gaming", quantity: 1 }
    ],
    stats: {
      Speed: 12,
      Stamina: 4,
      Technique: 4,
      Toughness: 8,
      Jumping: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-70",
    name: "Feint Steps",
    cards: [
      { type: "Agility", quantity: 1 },
      { type: "Sprinting", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 }
    ],
    stats: {
      Speed: 10,
      Technique: 6,
      Willpower: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-73",
    name: "Offside Trap",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Meeting", quantity: 1 }
    ],
    stats: {
      Stamina: 4,
      Technique: 1,
      Willpower: 8
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-76",
    name: "Marking Transfer",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Gaming", quantity: 1 }
    ],
    stats: {
      Stamina: 4,
      Technique: 2,
      Toughness: 2,
      Willpower: 4
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-206",
    name: "Superior Numbers",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Agility", quantity: 1 }
    ],
    stats: {
      Speed: 5,
      Stamina: 5,
      Jumping: 4,
      Willpower: 4
    },
    recommendedPosition: "MF"
  }
];
