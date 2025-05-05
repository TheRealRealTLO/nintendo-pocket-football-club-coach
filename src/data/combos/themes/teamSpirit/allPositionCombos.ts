
import { TrainingCombo } from '../../../types';

// All-position team spirit combos
export const allPositionTeamSpiritCombos: TrainingCombo[] = [
  {
    id: "combo-21",
    name: "Ultra Relaxation",
    cards: [
      { type: "Stretching", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Stamina: 6,
      Technique: 2,
      Toughness: 10,
      Jumping: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-25",
    name: "Fan Service",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Technique: 4,
      Willpower: 10
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-71",
    name: "Tricky Play",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Meeting", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Willpower: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-72",
    name: "Vocal Tactics",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Stamina: 4,
      Technique: 1,
      Willpower: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-207",
    name: "Captaincy",
    cards: [
      { type: "Running", quantity: 1 },
      { type: "Meeting", quantity: 1 }
    ],
    stats: {
      Stamina: 10,
      Willpower: 10
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-97",
    name: "Pitch Director",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Meeting", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Technique: 2,
      Willpower: 10
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-98",
    name: "Team Rally",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Meeting", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Speed: 4,
      Stamina: 4,
      Jumping: 4,
      Willpower: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-99",
    name: "Team Love",
    cards: [
      { type: "Oil Therapy", quantity: 1 },
      { type: "Meeting", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Willpower: 20
    },
    recommendedPosition: "ALL"
  }
];
