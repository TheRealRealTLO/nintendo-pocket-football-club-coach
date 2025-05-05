import { CardType, StatType, CardRequirement, TrainingCombo } from '../types';

/**
 * Parse a combo string like "Dribbling + Shooting" into an array of card requirements
 */
export function parseComboString(comboString: string): CardRequirement[] {
  // Split the string by '+' and trim each part
  const cardTypes = comboString.split('+').map(part => part.trim());
  
  // Convert each card type string to a CardRequirement object
  return cardTypes.map(type => ({
    type: type as CardType, // Cast to CardType
    quantity: 1 // Default quantity is 1
  }));
}

/**
 * Convert a stat value string like "+6" or "-2" into a number
 */
export function parseStatValue(value: string | null): number | undefined {
  if (!value) return undefined;
  
  // Remove any spaces and convert to a number
  return parseInt(value.replace(/\s/g, ''), 10);
}

/**
 * Determine the position recommendation based on the combo name
 */
export function determinePosition(comboName: string): "GK" | "DF" | "MF" | "FW" | "ALL" {
  const name = comboName.toLowerCase();
  
  // Check for goalkeeper specific combos
  if (name.includes('(gk)') || name.includes('goalie') || name.includes('keeper')) {
    return "GK";
  }
  
  // Check for defender specific terms
  if (name.includes('defence') || name.includes('defense') || name.includes('block') || 
      name.includes('marking') || name.includes('sliding') || name.includes('iron fist')) {
    return "DF";
  }
  
  // Check for midfielder specific terms
  if (name.includes('midfield') || name.includes('pass') || name.includes('tactic') ||
      name.includes('strategy') || name.includes('control') || name.includes('pressure')) {
    return "MF";
  }
  
  // Check for forward specific terms
  if (name.includes('striker') || name.includes('shot') || name.includes('dribbl') ||
      name.includes('header') || name.includes('attack') || name.includes('goal')) {
    return "FW";
  }
  
  // Default to all positions
  return "ALL";
}

/**
 * Generate a unique ID for a combo
 */
export function generateComboId(index: number): string {
  return `combo-${100 + index}`; // Start from 100 to avoid conflicts
}
