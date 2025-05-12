
import { StatType } from './types';

export type StatRank = "E" | "D" | "C" | "B" | "A" | "S";
export type Position = "GK" | "DF" | "MF" | "FW";
export type FatigueStatus = "Green" | "Amber" | "Red";

// Correct definition - PlayerStats is a mapped type (Record)
export type PlayerStats = Record<StatType, StatRank>;

export interface TrainingHistoryEntry {
  trained: boolean;
  comboId: string | null;
  date: string; // ISO date string
}

export interface Player {
  id: string;
  name: string;
  position: Position;
  number: number; // Jersey number
  foot: "Left" | "Right" | "Both";
  fatigue: FatigueStatus;
  trainingPriority: boolean;
  stats: PlayerStats;
  trainingHistory: TrainingHistoryEntry[];
}

export interface Squad {
  players: Player[];
  lastTrainingCamp: string | null;
  trainingCampCount: number;
}
