import { TrainingCombo } from '../../../types';

// Keep track of all combo IDs to ensure uniqueness
const comboIdRegistry: Record<string, string> = {};

/**
 * Validates that a combo ID is unique across all combo files
 * Returns true if the ID is valid and unique
 */
export function validateComboId(combo: TrainingCombo, sourceFile: string): boolean {
  if (comboIdRegistry[combo.id]) {
    console.error(
      `Duplicate combo ID detected: "${combo.id}" in ${sourceFile} conflicts with ${comboIdRegistry[combo.id]}`
    );
    return false;
  }
  comboIdRegistry[combo.id] = sourceFile;
  return true;
}

/**
 * Generate a new unique combo ID based on a prefix and the next available number
 */
export function generateUniqueComboId(prefix: string = "combo"): string {
  let counter = 1;
  let newId = `${prefix}-${counter}`;
  
  // Find an unused ID
  while (comboIdRegistry[newId]) {
    counter++;
    newId = `${prefix}-${counter}`;
  }
  
  return newId;
}
