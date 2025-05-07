
import { TrainingCombo } from '../types';

// Complete list of all training combos from the provided data
export const trainingCombos: TrainingCombo[] = [
  {
    id: "combo-1",
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
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-2",
    name: "Acrobatics",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 5,
      Technique: 2,
      Toughness: 6,
      Jumping: 2
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-3",
    name: "Aerial Specialist",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Heading", quantity: 1 },
      { type: "Kicking", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Technique: 2,
      Toughness: 6,
      Jumping: 16
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-4",
    name: "After Charge",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Kicking", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Kicking: 12,
      Technique: -2,
      Willpower: -2
    },
    recommendedPosition: "ALL",
    recommended: false
  },
  {
    id: "combo-5",
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
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-6",
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
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-7",
    name: "Ball Control",
    cards: [
      { type: "Freestyle", quantity: 1 },
      { type: "Running", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 6,
      Technique: 8,
      Toughness: 6
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-8",
    name: "Ball Magician",
    cards: [
      { type: "Place Kicks", quantity: 1 },
      { type: "Freestyle", quantity: 1 },
      { type: "Heading", quantity: 1 }
    ],
    stats: {
      Kicking: 7,
      Technique: 8
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-9",
    name: "Banana Shot",
    cards: [
      { type: "Place Kicks", quantity: 1 },
      { type: "Shooting", quantity: 1 }
    ],
    stats: {
      Willpower: 4
    },
    recommendedPosition: "FW",
    recommended: false
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
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-11",
    name: "Blind Plane",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Freestyle", quantity: 1 },
      { type: "Weights", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Technique: 5,
      Toughness: 4,
      Willpower: 2
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-12",
    name: "Blind Shot",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Shooting", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Technique: 3
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-13",
    name: "Blocking",
    cards: [
      { type: "Sliding", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 2,
      Toughness: 8,
      Willpower: 6
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-14",
    name: "Body Balance",
    cards: [
      { type: "Freestyle", quantity: 1 },
      { type: "Kicking", quantity: 1 }
    ],
    stats: {
      Technique: 7,
      Toughness: 7
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-15",
    name: "Body of Steel",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Weights", quantity: 1 },
      { type: "Kicking", quantity: 1 }
    ],
    stats: {
      Kicking: 4,
      Technique: 3,
      Toughness: 16
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-16",
    name: "Bodywork",
    cards: [
      { type: "Weights", quantity: 1 },
      { type: "Sprinting", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Speed: 1,
      Toughness: 8,
      Jumping: 1
    },
    recommendedPosition: "DF",
    recommended: false
  },
  {
    id: "combo-17",
    name: "Brick Wall",
    cards: [
      { type: "Kicking", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Stamina: 4,
      Toughness: 1,
      Willpower: 4
    },
    recommendedPosition: "DF",
    recommended: false
  },
  {
    id: "combo-18",
    name: "Captaincy",
    cards: [
      { type: "Running", quantity: 1 },
      { type: "Meeting", quantity: 1 }
    ],
    stats: {
      Stamina: 10,
      Willpower: 10
    },
    recommendedPosition: "ALL",
    recommended: true
  },
  {
    id: "combo-19",
    name: "Chasing",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Aerobics", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 8,
      Toughness: 6
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-20",
    name: "ChooChoo Train",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Stretching", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Speed: 4,
      Stamina: 2,
      Toughness: 7,
      Jumping: 2,
      Willpower: 4
    },
    recommendedPosition: "DF",
    recommended: false
  },
  {
    id: "combo-21",
    name: "Commander",
    cards: [
      { type: "Sprinting", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 4,
      Stamina: 4,
      Technique: 3,
      Toughness: 4
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-22",
    name: "Compact Field",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Line Control", quantity: 1 }
    ],
    stats: {
      Speed: 4,
      Stamina: 4,
      Willpower: 4
    },
    recommendedPosition: "DF",
    recommended: false
  },
  {
    id: "combo-23",
    name: "Control Tower",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Stamina: 4,
      Technique: 2,
      Willpower: 6
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-24",
    name: "Controlled Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Freestyle", quantity: 1 }
    ],
    stats: {
      Kicking: 6,
      Technique: 5
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-25",
    name: "Covering",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Sprinting", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Stamina: 4,
      Toughness: 10,
      Jumping: 6
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-26",
    name: "Deadly Slide",
    cards: [
      { type: "Sliding", quantity: 1 },
      { type: "Kicking", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Technique: 7,
      Toughness: 1
    },
    recommendedPosition: "DF",
    recommended: false
  },
  {
    id: "combo-27",
    name: "Desperate Saves",
    cards: [
      { type: "Aerobics", quantity: 1 },
      { type: "Meditation", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Stamina: 4,
      Technique: 8,
      Willpower: 10
    },
    recommendedPosition: "GK",
    recommended: true
  },
  {
    id: "combo-28",
    name: "Determination",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Technique: 3,
      Willpower: 1
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-29",
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
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-30",
    name: "Diving",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Agility", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 24,
      Stamina: -4,
      Willpower: -4
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-31",
    name: "Driving Shot",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Shooting", quantity: 1 },
      { type: "Sprinting", quantity: 1 }
    ],
    stats: {
      Kicking: 9,
      Speed: 10
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-32",
    name: "Dogged Marker",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Running", quantity: 1 }
    ],
    stats: {
      Speed: 4,
      Stamina: 10,
      Toughness: 4,
      Willpower: 4
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-33",
    name: "Dribbling Shot",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Shooting", quantity: 1 }
    ],
    stats: {
      Kicking: 6,
      Speed: 6,
      Technique: 3
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-34",
    name: "Escape Reality",
    cards: [
      { type: "Gaming", quantity: 1 },
      { type: "Spa", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Technique: 8,
      Toughness: -4,
      Willpower: -2
    },
    recommendedPosition: "ALL",
    recommended: false
  },
  {
    id: "combo-35",
    name: "Explosive Header",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Heading", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Stamina: 4,
      Jumping: 12,
      Willpower: 6
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-36",
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
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-37",
    name: "Fan Service",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Stamina: 4,
      Willpower: 10
    },
    recommendedPosition: "ALL",
    recommended: false
  },
  {
    id: "combo-38",
    name: "Fast Dribble",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Sprinting", quantity: 1 }
    ],
    stats: {
      Speed: 12,
      Stamina: 4,
      Technique: 4
    },
    recommendedPosition: "FW",
    recommended: true
  },
  {
    id: "combo-39",
    name: "Feint Steps",
    cards: [
      { type: "Sprinting", quantity: 1 },
      { type: "Agility", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 }
    ],
    stats: {
      Speed: 10,
      Technique: 6,
      Willpower: 4
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-40",
    name: "First-Touch",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Freestyle", quantity: 1 }
    ],
    stats: {
      Speed: 7,
      Technique: 6
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-41",
    name: "FK Master",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Place Kicks", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Kicking: 12,
      Willpower: 8
    },
    recommendedPosition: "FW",
    recommended: true
  },
  {
    id: "combo-42",
    name: "Flowing Football",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Passing", quantity: 1 },
      { type: "Agility", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Speed: 10,
      Technique: 6
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-43",
    name: "Football Professor",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Set Play", quantity: 1 },
      { type: "Gaming", quantity: 1 }
    ],
    stats: {
      Kicking: 4,
      Speed: 4,
      Technique: 2,
      Willpower: 8
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-44",
    name: "Free Kick Legend",
    cards: [
      { type: "Place Kicks", quantity: 1 },
      { type: "Visualising", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 11,
      Willpower: 10
    },
    recommendedPosition: "FW",
    recommended: true
  },
  {
    id: "combo-45",
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
      Jumping: 3,
      Willpower: 4
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-46",
    name: "Goalie Runs Up",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Running", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Kicking: 12,
      Stamina: 8
    },
    recommendedPosition: "GK",
    recommended: true
  },
  {
    id: "combo-47",
    name: "Golden Feet",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Kicking", quantity: 1 },
      { type: "Meeting", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 2,
      Stamina: 1,
      Technique: 2,
      Toughness: 4,
      Willpower: 4
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-48",
    name: "Gutsy Clearance",
    cards: [
      { type: "Heading", quantity: 1 },
      { type: "Stretching", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 4,
      Toughness: 10,
      Jumping: 10
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-49",
    name: "Hand of God",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Shooting", quantity: 1 },
      { type: "Heading", quantity: 1 }
    ],
    stats: {
      Kicking: 12,
      Technique: -1,
      Willpower: -4
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-50",
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
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-51",
    name: "Headed Shot",
    cards: [
      { type: "Heading", quantity: 1 },
      { type: "Agility", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Toughness: 6,
      Jumping: 14
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-52",
    name: "Heart of Steel",
    cards: [
      { type: "PK Practice", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Stamina: 1,
      Willpower: 12
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-53",
    name: "Hold Up Play",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Heading", quantity: 1 }
    ],
    stats: {
      Technique: 6,
      Toughness: 8
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-54",
    name: "Holding Ground",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Aerobics", quantity: 1 }
    ],
    stats: {
      Stamina: 6,
      Technique: 4,
      Toughness: 4
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-55",
    name: "Homing Cross",
    cards: [
      { type: "Place Kicks", quantity: 1 },
      { type: "Kicking", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 6,
      Speed: 4,
      Stamina: 4,
      Technique: 2,
      Toughness: 4,
      Willpower: 4
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-56",
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
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-57",
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
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-58",
    name: "Intercepting",
    cards: [
      { type: "Sliding", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Stamina: 4,
      Toughness: 6,
      Willpower: 4
    },
    recommendedPosition: "DF",
    recommended: false
  },
  {
    id: "combo-59",
    name: "Iron Defence",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Pressuring", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Technique: 2,
      Toughness: 5
    },
    recommendedPosition: "DF",
    recommended: false
  },
  {
    id: "combo-60",
    name: "Iron Fist",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Weights", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Toughness: 12,
      Willpower: 6
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-61",
    name: "Keen Coaching",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Line Control", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Stamina: 6,
      Technique: 4,
      Willpower: 10
    },
    recommendedPosition: "ALL",
    recommended: true
  },
  {
    id: "combo-62",
    name: "Keeper Charge",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Shooting", quantity: 1 },
      { type: "Sliding", quantity: 1 }
    ],
    stats: {
      Kicking: -2,
      Technique: 8,
      Jumping: -2,
      Willpower: -2
    },
    recommendedPosition: "GK",
    recommended: false
  },
  {
    id: "combo-63",
    name: "Killer Pass",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Kicking", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 5,
      Stamina: 3,
      Technique: 5,
      Toughness: 5
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-64",
    name: "Knuckle Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 6,
      Technique: 3,
      Willpower: 6
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-65",
    name: "Last Gasp Miracle",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Set Play", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 4,
      Technique: 2,
      Willpower: 16
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-66",
    name: "Last Gasp Pass",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Passing", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 4,
      Technique: 4,
      Willpower: 8
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-67",
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
      Willpower: 4
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-68",
    name: "Linked Partners",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 8,
      Technique: 4,
      Toughness: 2,
      Willpower: 2
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-69",
    name: "Long Pass",
    cards: [
      { type: "Place Kicks", quantity: 1 },
      { type: "Weights", quantity: 1 }
    ],
    stats: {
      Kicking: 8,
      Technique: 6,
      Toughness: 4,
      Willpower: 4
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-70",
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
      Willpower: 4
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-71",
    name: "Lucky Chance",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Signing", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Speed: 1,
      Technique: 1
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-72",
    name: "Magic Trapping",
    cards: [
      { type: "Freestyle", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Technique: 6,
      Willpower: 4
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-73",
    name: "Magnet Trapping",
    cards: [
      { type: "Freestyle", quantity: 1 },
      { type: "Stretching", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 8,
      Toughness: 4,
      Willpower: 4
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-74",
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
    recommendedPosition: "DF",
    recommended: false
  },
  {
    id: "combo-75",
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
      Willpower: 6
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-76",
    name: "Midfield Strike",
    cards: [
      { type: "Weights", quantity: 1 },
      { type: "Shooting", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Kicking: 14,
      Toughness: 4
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-77",
    name: "Miracle Loop",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Shooting", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Kicking: 7,
      Technique: 2,
      Willpower: 8
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-78",
    name: "Mood Maker",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Mini-Game", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Stamina: 4,
      Technique: 3,
      Willpower: 6
    },
    recommendedPosition: "ALL",
    recommended: false
  },
  {
    id: "combo-79",
    name: "Multitool",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 4,
      Toughness: 4,
      Willpower: 4
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-80",
    name: "No-Look Pass",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Sprinting", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 6,
      Willpower: 8
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-81",
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
    recommendedPosition: "DF",
    recommended: false
  },
  {
    id: "combo-82",
    name: "Open Space",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Mini-Game", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 4,
      Stamina: 4,
      Technique: 1
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-83",
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
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-84",
    name: "Overlapping",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Running", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 12
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-85",
    name: "Overtraining",
    cards: [
      { type: "Running", quantity: 1 },
      { type: "Sliding", quantity: 1 },
      { type: "Weights", quantity: 1 }
    ],
    stats: {
      Kicking: -1,
      Stamina: -4,
      Toughness: 24,
      Willpower: -2
    },
    recommendedPosition: "ALL",
    recommended: false
  },
  {
    id: "combo-86",
    name: "Phantom Dribbler",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Freestyle", quantity: 1 }
    ],
    stats: {
      Speed: 14,
      Stamina: 6,
      Technique: 7
    },
    recommendedPosition: "FW",
    recommended: true
  },
  {
    id: "combo-87",
    name: "Pin-Point Pass",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 4,
      Willpower: 6
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-88",
    name: "Pitch Director",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "PK Practice", quantity: 1 },
      { type: "Meeting", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Technique: 2,
      Willpower: 10
    },
    recommendedPosition: "ALL",
    recommended: false
  },
  {
    id: "combo-89",
    name: "Pivot Turn",
    cards: [
      { type: "Agility", quantity: 1 },
      { type: "Aerobics", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 6
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-90",
    name: "Rapid Dribbling",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 6,
      Willpower: 4
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-91",
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
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-92",
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
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-93",
    name: "Risky Block",
    cards: [
      { type: "Sliding", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Technique: 2,
      Toughness: 6,
      Willpower: 8
    },
    recommendedPosition: "DF",
    recommended: false
  },
  {
    id: "combo-94",
    name: "Rock-A-Bye",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Mini-Game", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 }
    ],
    stats: {
      Kicking: 1,
      Stamina: 2,
      Technique: 1,
      Toughness: 2,
      Jumping: 2,
      Willpower: 2
    },
    recommendedPosition: "DF",
    recommended: false
  },
  {
    id: "combo-95",
    name: "Rocket Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Running", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Speed: 6,
      Technique: 1
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-96",
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
      Willpower: 4
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-97",
    name: "Rush Attack",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Passing", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Speed: 10,
      Stamina: 6,
      Technique: 4,
      Jumping: 6
    },
    recommendedPosition: "FW",
    recommended: true
  },
  {
    id: "combo-98",
    name: "Samba Steps",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Sliding", quantity: 1 },
      { type: "Agility", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 3,
      Technique: 3,
      Toughness: 3,
      Jumping: 4,
      Willpower: 1
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-99",
    name: "Scissors Feint",
    cards: [
      { type: "Agility", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Speed: 4,
      Technique: 3,
      Willpower: 6
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-100",
    name: "Shadow Striker",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Shooting", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Kicking: 7,
      Speed: 5,
      Technique: 2,
      Willpower: 2
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-101",
    name: "Shock Dribble",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Dribbling", quantity: 1 },
      { type: "Kicking", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 6,
      Technique: 6,
      Toughness: 6
    },
    recommendedPosition: "FW",
    recommended: true
  },
  {
    id: "combo-102",
    name: "Sliding Header",
    cards: [
      { type: "Heading", quantity: 1 },
      { type: "Sliding", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Technique: 2,
      Toughness: 6,
      Jumping: 6,
      Willpower: 6
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-103",
    name: "Star Striker",
    cards: [
      { type: "Place Kicks", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Kicking: 10,
      Technique: 4,
      Toughness: 6
    },
    recommendedPosition: "FW",
    recommended: true
  },
  {
    id: "combo-104",
    name: "Star Takedown",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Sliding", quantity: 1 },
      { type: "Sprinting", quantity: 1 }
    ],
    stats: {
      Speed: 12,
      Stamina: 6,
      Technique: 2,
      Toughness: 10
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-105",
    name: "Strategist",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Gaming", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 3,
      Willpower: 6
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-106",
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
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-107",
    name: "Super Refreshment",
    cards: [
      { type: "Aerobics", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Stamina: 12,
      Technique: 2,
      Willpower: 8
    },
    recommendedPosition: "ALL",
    recommended: true
  },
  {
    id: "combo-108",
    name: "Super Save",
    cards: [
      { type: "Heading", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Stamina: 4,
      Jumping: 8,
      Willpower: 8
    },
    recommendedPosition: "GK",
    recommended: true
  },
  {
    id: "combo-109",
    name: "Super Sub",
    cards: [
      { type: "Sprinting", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Speed: 8,
      Jumping: 6
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-110",
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
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-111",
    name: "Target Man",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Weights", quantity: 1 },
      { type: "Heading", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Speed: 5,
      Stamina: 5,
      Technique: 2,
      Jumping: 5
    },
    recommendedPosition: "FW",
    recommended: true
  },
  {
    id: "combo-112",
    name: "Team Love",
    cards: [
      { type: "Oil Therapy", quantity: 1 },
      { type: "Signing", quantity: 1 },
      { type: "Meeting", quantity: 1 }
    ],
    stats: {
      Willpower: 20
    },
    recommendedPosition: "ALL",
    recommended: true
  },
  {
    id: "combo-113",
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
    recommendedPosition: "ALL",
    recommended: true
  },
  {
    id: "combo-114",
    name: "The Chain",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Marking", quantity: 1 },
      { type: "Line Control", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 4,
      Stamina: 6,
      Technique: 2,
      Toughness: 6
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-115",
    name: "Time Wasting",
    cards: [
      { type: "Place Kicks", quantity: 1 },
      { type: "Running", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Speed: -4,
      Stamina: 24,
      Jumping: -2,
      Willpower: -2
    },
    recommendedPosition: "ALL",
    recommended: false
  },
  {
    id: "combo-116",
    name: "Titanic Goalie",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Agility", quantity: 1 }
    ],
    stats: {
      Technique: 2,
      Toughness: 1,
      Jumping: 4
    },
    recommendedPosition: "GK",
    recommended: false
  },
  {
    id: "combo-117",
    name: "Tough Midfielder",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Dribbling", quantity: 1 },
      { type: "Sliding", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Speed: 6,
      Stamina: 6,
      Technique: 4,
      Toughness: 6
    },
    recommendedPosition: "MF",
    recommended: true
  },
  {
    id: "combo-118",
    name: "Total Football",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Dribbling", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {},
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-119",
    name: "Triangle",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Passing", quantity: 1 }
    ],
    stats: {
      Kicking: 1,
      Speed: 6,
      Technique: 3
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-120",
    name: "Trick Play",
    cards: [
      { type: "Meeting", quantity: 1 },
      { type: "Set Play", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Willpower: 8
    },
    recommendedPosition: "ALL",
    recommended: false
  },
  {
    id: "combo-121",
    name: "Trickery",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 8,
      Stamina: -2,
      Willpower: 6
    },
    recommendedPosition: "ALL",
    recommended: false
  },
  {
    id: "combo-122",
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
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-123",
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
      Willpower: 8
    },
    recommendedPosition: "ALL",
    recommended: true
  },
  {
    id: "combo-124",
    name: "Velvet Pass",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 1,
      Speed: 1,
      Technique: 4,
      Toughness: 4,
      Willpower: 4
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-125",
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
    recommendedPosition: "ALL",
    recommended: false
  },
  {
    id: "combo-126",
    name: "Volley Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 9,
      Technique: 2
    },
    recommendedPosition: "FW",
    recommended: false
  },
  {
    id: "combo-127",
    name: "Wild Man",
    cards: [
      { type: "Running", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Sprinting", quantity: 1 }
    ],
    stats: {
      Speed: 20,
      Stamina: 20,
      Willpower: -2
    },
    recommendedPosition: "ALL",
    recommended: true
  },
  {
    id: "combo-128",
    name: "Wild Rage",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Kicking", quantity: 1 },
      { type: "Agility", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Technique: 6,
      Toughness: 8,
      Jumping: 6
    },
    recommendedPosition: "DF",
    recommended: true
  },
  {
    id: "combo-129",
    name: "Wing Attack",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Running", quantity: 1 }
    ],
    stats: {
      Speed: 1,
      Stamina: 1,
      Toughness: 2,
      Willpower: 4
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-130",
    name: "Wing Block",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 3,
      Technique: 3,
      Willpower: 5
    },
    recommendedPosition: "DF",
    recommended: false
  },
  {
    id: "combo-131",
    name: "Wing Change",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Place Kicks", quantity: 1 }
    ],
    stats: {
      Kicking: 4,
      Stamina: 6,
      Willpower: 6
    },
    recommendedPosition: "MF",
    recommended: false
  },
  {
    id: "combo-132",
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
    recommendedPosition: "MF",
    recommended: false
  }
];
