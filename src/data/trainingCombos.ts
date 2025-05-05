
import { TrainingCombo } from './types';

// Helper function to parse card types from combo string
const parseCombo = (comboString: string): string[] => {
  return comboString.split('+').map(card => card.trim());
};

// Collection of all training combos based on JSON data
export const trainingCombos: TrainingCombo[] = [
  {
    id: "combo-1",
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
    recommendedPosition: "FW"
  },
  {
    id: "combo-2",
    name: "Sliding Header",
    cards: [
      { type: "Sliding", quantity: 1 },
      { type: "Heading", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Technique: 2,
      Toughness: 6,
      Jumping: 6,
      Willpower: 6
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-3",
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
    recommendedPosition: "FW"
  },
  {
    id: "combo-4",
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
    recommendedPosition: "DF"
  },
  {
    id: "combo-5",
    name: "Velvet Pass",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 1,
      Stamina: 4,
      Toughness: 4,
      Willpower: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-6",
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
    id: "combo-7",
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
    recommendedPosition: "FW"
  },
  {
    id: "combo-8",
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
    recommendedPosition: "DF"
  },
  {
    id: "combo-9",
    name: "Brick Wall",
    cards: [
      { type: "Kicking", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Technique: 4,
      Toughness: 1,
      Willpower: 4
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-10",
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
    recommendedPosition: "ALL"
  },
  {
    id: "combo-11",
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
    recommendedPosition: "ALL"
  },
  {
    id: "combo-12",
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
    id: "combo-13",
    name: "Volley Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 9,
      Technique: 2
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-14",
    name: "Determination",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Technique: 3,
      Willpower: 1
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-15",
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
    recommendedPosition: "FW"
  },
  {
    id: "combo-16",
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
    recommendedPosition: "ALL"
  },
  {
    id: "combo-17",
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
    id: "combo-18",
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
    recommendedPosition: "ALL"
  },
  {
    id: "combo-19",
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
    recommendedPosition: "DF"
  },
  {
    id: "combo-20",
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
    recommendedPosition: "MF"
  },
  {
    id: "combo-21",
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
    recommendedPosition: "DF"
  },
  {
    id: "combo-22",
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
    id: "combo-23",
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
    recommendedPosition: "MF"
  },
  {
    id: "combo-24",
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
    id: "combo-25",
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
    id: "combo-26",
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
    recommendedPosition: "ALL"
  },
  {
    id: "combo-27",
    name: "Compact Field",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Line Control", quantity: 1 }
    ],
    stats: {
      Speed: 4,
      Stamina: 4,
      Jumping: 4
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-28",
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
    recommendedPosition: "MF"
  },
  {
    id: "combo-29",
    name: "Wing Block",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 3,
      Technique: 3,
      Jumping: 5
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-30",
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
  },
  {
    id: "combo-31",
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
    recommendedPosition: "FW"
  },
  {
    id: "combo-32",
    name: "First-Touch",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Freestyle", quantity: 1 }
    ],
    stats: {
      Speed: 7,
      Technique: 6
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-33",
    name: "Magic Trapping",
    cards: [
      { type: "Judo", quantity: 1 },
      { type: "Freestyle", quantity: 1 }
    ],
    stats: {
      Technique: 6,
      Jumping: 4
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-34",
    name: "Magnet Trapping",
    cards: [
      { type: "Stretching", quantity: 1 },
      { type: "Freestyle", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 8,
      Toughness: 4,
      Jumping: 4
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-35",
    name: "Controlled Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Freestyle", quantity: 1 }
    ],
    stats: {
      Kicking: 6,
      Technique: 5
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-36",
    name: "Banana Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Place Kicks", quantity: 1 }
    ],
    stats: {
      Willpower: 4
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-37",
    name: "Volley Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 9,
      Technique: 2
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-38",
    name: "Blind Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Marking", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Technique: 3
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-39",
    name: "Knuckle Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 6,
      Technique: 3,
      Jumping: 6
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-40",
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
  },
  {
    id: "combo-41",
    name: "Rapid Dribbling",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 6,
      Jumping: 4
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-42",
    name: "Shock Dribble",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Mini-Game", quantity: 1 },
      { type: "Kicking", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 6,
      Technique: 6,
      Jumping: 6
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-43",
    name: "Phantom Dribbler",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Freestyle", quantity: 1 },
      { type: "Aerobics", quantity: 1 }
    ],
    stats: {
      Speed: 14,
      Stamina: 6,
      Technique: 7
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-44",
    name: "Headed Shot",
    cards: [
      { type: "Heading", quantity: 1 },
      { type: "Agility", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Technique: 2,
      Toughness: 6,
      Jumping: 14
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-45",
    name: "Explosive Header",
    cards: [
      { type: "Heading", quantity: 1 },
      { type: "Marking", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Stamina: 4,
      Toughness: 6,
      Jumping: 12
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-46",
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
    recommendedPosition: "DF"
  },
  {
    id: "combo-47",
    name: "Target Man",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Heading", quantity: 1 },
      { type: "Weights", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Speed: 5,
      Stamina: 5,
      Technique: 2,
      Jumping: 5
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-48",
    name: "Hold Up Play",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Heading", quantity: 1 }
    ],
    stats: {
      Technique: 6,
      Toughness: 8
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-49",
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
    recommendedPosition: "MF"
  },
  {
    id: "combo-50",
    name: "Killer Pass",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Kicking", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 5,
      Technique: 5,
      Toughness: 5,
      Jumping: 3
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-51",
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
      Jumping: 2
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-52",
    name: "Body Balance",
    cards: [
      { type: "Freestyle", quantity: 1 },
      { type: "Kicking", quantity: 1 }
    ],
    stats: {
      Stamina: 7,
      Toughness: 7
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-53",
    name: "Wing Change",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Place Kicks", quantity: 1 }
    ],
    stats: {
      Kicking: 4,
      Stamina: 6,
      Jumping: 6
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-54",
    name: "Long Pass",
    cards: [
      { type: "Weights", quantity: 1 },
      { type: "Place Kicks", quantity: 1 }
    ],
    stats: {
      Kicking: 8,
      Technique: 6,
      Toughness: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-55",
    name: "Homing Cross",
    cards: [
      { type: "Kicking", quantity: 1 },
      { type: "Place Kicks", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 8,
      Technique: 2,
      Jumping: 8
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-56",
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
    id: "combo-57",
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
    id: "combo-58",
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
    id: "combo-59",
    name: "Vocal Tactics",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Stamina: 4,
      Technique: 1,
      Jumping: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-60",
    name: "Marking Transfer",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Gaming", quantity: 1 }
    ],
    stats: {
      Stamina: 4,
      Technique: 2,
      Toughness: 2,
      Jumping: 4
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-61",
    name: "Intercepting",
    cards: [
      { type: "Sliding", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Technique: 4,
      Toughness: 6,
      Jumping: 4
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-62",
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
    recommendedPosition: "ALL"
  },
  {
    id: "combo-63",
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
    id: "combo-64",
    name: "Total Football",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Dribbling", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {},
    recommendedPosition: "ALL"
  },
  {
    id: "combo-65",
    name: "Rush Attack",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Dribbling", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Speed: 10,
      Stamina: 6,
      Technique: 4,
      Jumping: 6
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-66",
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
    recommendedPosition: "DF"
  },
  {
    id: "combo-67",
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
  },
  {
    id: "combo-68",
    name: "Blocking",
    cards: [
      { type: "Sliding", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 2,
      Toughness: 8,
      Jumping: 6
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-69",
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
    recommendedPosition: "DF"
  },
  {
    id: "combo-70",
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
    recommendedPosition: "DF"
  },
  {
    id: "combo-71",
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
    id: "combo-72",
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
      Jumping: 8
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-73",
    name: "Strategist",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Gaming", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 3,
      Jumping: 6
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-74",
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
    recommendedPosition: "MF"
  },
  {
    id: "combo-75",
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
  },
  {
    id: "combo-76",
    name: "FK Master",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Place Kicks", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Kicking: 12,
      Jumping: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-77",
    name: "Free Kick Legend",
    cards: [
      { type: "Visualising", quantity: 1 },
      { type: "Place Kicks", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 11,
      Jumping: 10
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-78",
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
    recommendedPosition: "FW"
  },
  {
    id: "combo-79",
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
      Jumping: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-80",
    name: "Ball Magician",
    cards: [
      { type: "Freestyle", quantity: 1 },
      { type: "Place Kicks", quantity: 1 },
      { type: "Heading", quantity: 1 }
    ],
    stats: {
      Kicking: 7,
      Technique: 8
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-81",
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
  },
  {
    id: "combo-82",
    name: "Trickery",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 8,
      Stamina: -2,
      Jumping: 6
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-83",
    name: "Heart of Steel",
    cards: [
      { type: "PK Practice", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Stamina: 1,
      Jumping: 12
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-84",
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
    recommendedPosition: "DF"
  },
  {
    id: "combo-85",
    name: "Iron Fist",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Weights", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Toughness: 12,
      Jumping: 6
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-86",
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
      Jumping: 16
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-87",
    name: "Super Refreshment",
    cards: [
      { type: "Aerobics", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Stamina: 12,
      Technique: 2,
      Jumping: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-88",
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
      Jumping: 2
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-89",
    name: "Acrobatics",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 6,
      Speed: 5,
      Stamina: 2,
      Technique: 6,
      Toughness: 2
    },
    recommendedPosition: "ALL"
  },
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
    id: "combo-93",
    name: "Hand of God",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Shooting", quantity: 1 },
      { type: "Heading", quantity: 1 }
    ],
    stats: {
      Kicking: 12,
      Technique: -2,
      Willpower: -4
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-94",
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
    recommendedPosition: "ALL"
  },
  {
    id: "combo-95",
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
    recommendedPosition: "FW"
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
  },
  {
    id: "combo-97",
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
    recommendedPosition: "ALL"
  }
];
