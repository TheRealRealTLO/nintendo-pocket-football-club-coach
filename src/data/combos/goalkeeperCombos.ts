import { TrainingCombo } from '../types';

// Training combos specifically for goalkeepers
export const goalkeeperCombos: TrainingCombo[] = [
  {
    id: "combo-90",
    name: "Desperate Saves",
    cards: [
      { type: "Aerobics", quantity: 1 },
      { type: "Meditation", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Speed: 4,
      Stamina: 8,
      Toughness: 10
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo-91",
    name: "Super Save",
    cards: [
      { type: "Heading", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Speed: 4,
      Toughness: 8,
      Jumping: 8
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo-92",
    name: "Titanic Goalie",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Agility", quantity: 1 }
    ],
    stats: {
      Stamina: 2,
      Technique: 1,
      Toughness: 4
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo-96",
    name: "Keeper Charge",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Sliding", quantity: 1 },
      { type: "Shooting", quantity: 1 }
    ],
    stats: {
      Kicking: -2,
      Technique: 8,
      Jumping: -2,
      Willpower: 8
    },
    recommendedPosition: "GK"
  }
];
