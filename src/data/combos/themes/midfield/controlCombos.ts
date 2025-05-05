
import { TrainingCombo } from '../../../types';

// Midfield control-focused combos
export const controlCombos: TrainingCombo[] = [
  {
    id: "combo-3",
    name: "2nd Strike",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Sprinting", quantity: 1 }
    ],
    stats: {
      Kicking: 4,
      Speed: 4,
      Technique: 2,
      Jumping: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-7",
    name: "Overlapping",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Running", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 12
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-9",
    name: "Tricky Feint",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Freestyle", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 4,
      Technique: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-10",
    name: "Bicycle Kick",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 4,
      Stamina: 6,
      Technique: 4,
      Toughness: 6
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-74",
    name: "Impulse Play",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Technique: 2,
      Jumping: 4,
      Willpower: 2
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-75",
    name: "Diagonal Run",
    cards: [
      { type: "Running", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 3,
      Stamina: 6,
      Willpower: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-79",
    name: "Rapid Turnaround",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Sliding", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 3,
      Toughness: 3
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-80",
    name: "Total Football",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Dribbling", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {},
    recommendedPosition: "MF"
  },
  {
    id: "combo-82",
    name: "Open the Gates",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Countering", quantity: 1 }
    ],
    stats: {
      Speed: 2,
      Stamina: 4,
      Technique: 2,
      Toughness: 4
    },
    recommendedPosition: "MF"
  }
];
