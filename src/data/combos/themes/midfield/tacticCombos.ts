
import { TrainingCombo } from '../../../types';

// Midfield tactical combos
export const tacticCombos: TrainingCombo[] = [
  {
    id: "combo-11",
    name: "Super Sub",
    cards: [
      { type: "Sprinting", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Speed: 8,
      Jumping: 6,
      Willpower: 8
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-14",
    name: "Hungry for Glory",
    cards: [
      { type: "Weights", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Stamina: 6,
      Technique: 3,
      Toughness: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-15",
    name: "Multitool",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 4,
      Toughness: 4,
      Jumping: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-18",
    name: "Determination",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Technique: 3,
      Willpower: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-20",
    name: "Last Trump",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Passing", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Kicking: 8,
      Speed: 8,
      Toughness: 6,
      Jumping: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-27",
    name: "Attack Waves",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Running", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 4,
      Stamina: 4,
      Technique: 2,
      Willpower: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-28",
    name: "Eye Contact",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Meeting", quantity: 1 }
    ],
    stats: {
      Kicking: 1,
      Speed: 2,
      Stamina: 2,
      Technique: 2,
      Willpower: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-29",
    name: "Open Space",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Countering", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 4,
      Stamina: 4,
      Technique: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-30",
    name: "Control Tower",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Stamina: 4,
      Technique: 2,
      Jumping: 6
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-38",
    name: "Last Gasp Pass",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Passing", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 6,
      Technique: 4,
      Jumping: 8
    },
    recommendedPosition: "MF"
  }
];
