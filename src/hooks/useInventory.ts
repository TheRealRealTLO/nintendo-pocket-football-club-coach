
import { useState, useEffect } from 'react';
import { CardType, allCardTypes } from '../data/combos';

export interface InventoryState {
  cards: { [key in CardType]: number };
  history: Array<{
    comboId: string;
    cards: { [key in CardType]: number };
  }>;
}

export function useInventory() {
  const [inventory, setInventory] = useState<InventoryState>(() => {
    const savedInventory = localStorage.getItem('npfc-inventory');
    if (savedInventory) {
      return JSON.parse(savedInventory);
    }
    
    // Initialize with empty inventory
    const initialCards = allCardTypes.reduce((acc, type) => {
      acc[type] = 0;
      return acc;
    }, {} as { [key in CardType]: number });
    
    return { cards: initialCards, history: [] };
  });

  // Save inventory to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('npfc-inventory', JSON.stringify(inventory));
  }, [inventory]);

  // Update card quantity
  const updateCardQuantity = (type: CardType, quantity: number) => {
    setInventory(prev => ({
      ...prev,
      cards: {
        ...prev.cards,
        [type]: Math.max(0, quantity)
      }
    }));
  };

  // Apply a combo (deduct cards and add to history)
  const applyCombo = (comboId: string, cardRequirements: { type: CardType; quantity: number }[]) => {
    setInventory(prev => {
      const updatedCards = { ...prev.cards };
      
      // Deduct the required cards
      cardRequirements.forEach(req => {
        updatedCards[req.type] = Math.max(0, updatedCards[req.type] - req.quantity);
      });
      
      return {
        cards: updatedCards,
        history: [
          { comboId, cards: prev.cards }, // Save previous state for undo
          ...prev.history
        ]
      };
    });
  };

  // Undo the last applied combo
  const undoLastCombo = () => {
    setInventory(prev => {
      if (prev.history.length === 0) return prev;
      
      const [lastState, ...restHistory] = prev.history;
      
      return {
        cards: lastState.cards,
        history: restHistory
      };
    });
  };

  // Reset the inventory
  const resetInventory = () => {
    const initialCards = allCardTypes.reduce((acc, type) => {
      acc[type] = 0;
      return acc;
    }, {} as { [key in CardType]: number });
    
    setInventory({ cards: initialCards, history: [] });
  };

  return {
    inventory,
    updateCardQuantity,
    applyCombo,
    undoLastCombo,
    resetInventory
  };
}
