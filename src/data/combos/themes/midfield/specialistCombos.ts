
import { TrainingCombo } from '../../../types';

// Midfield specialist combos
export const specialistCombos: TrainingCombo[] = [
  {
    id: "combo-39",
    name: "Wonder Boy",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 },
      { type: "Gaming", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Speed: 6,
      Technique: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-88",
    name: "Tough Midfielder",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Sliding", quantity: 1 },
      { type: "Dribbling", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Speed: 6,
      Stamina: 6,
      Technique: 4,
      Toughness: 6
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-89",
    name: "Relentless Pressure",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Weights", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 8,
      Technique: 2,
      Willpower: 8
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-90",
    name: "Hard Dynamo",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Running", quantity: 1 },
      { type: "Agility", quantity: 1 }
    ],
    stats: {
      Speed: 10,
      Stamina: 14,
      Technique: 5
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-91",
    name: "Midfield Maestro",
    cards: [
      { type: "Place Kicks", quantity: 1 },
      { type: "Passing", quantity: 1 },
      { type: "Agility", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Speed: 8,
      Technique: 5,
      Jumping: 6
    },
    recommendedPosition: "MF"
  }
];
