
import { useState, useEffect } from 'react';
import { Player, Squad, TrainingHistoryEntry, Position, FatigueStatus } from '../data/playerTypes';
import { v4 as uuidv4 } from 'uuid'; 
import { TrainingCombo } from '@/data/combos';
import { CardType } from '@/data/types';
import { toast } from '@/hooks/use-toast';

// Initial empty squad
const initialSquad: Squad = {
  players: [],
  lastTrainingCamp: null,
  trainingCampCount: 0
};

export interface UsePlayerSquadReturn {
  squad: Squad;
  addPlayer: (player: Omit<Player, 'id' | 'trainingHistory'>) => void;
  updatePlayer: (player: Player) => void;
  removePlayer: (playerId: string) => void;
  toggleTrainingPriority: (playerId: string) => void;
  applyTrainingToPlayer: (playerId: string, comboId: string | null) => void;
  runTrainingCamp: () => void;
  getUntrainedPriorityPlayers: () => Player[];
  resetSquad: () => void;
  updatePlayerFatigue: (playerId: string, fatigue: FatigueStatus) => void;
}

export function usePlayerSquad(): UsePlayerSquadReturn {
  const [squad, setSquad] = useState<Squad>(() => {
    const savedSquad = localStorage.getItem('npfc-squad');
    if (savedSquad) {
      try {
        return JSON.parse(savedSquad);
      } catch (e) {
        console.error("Error parsing saved squad:", e);
        return initialSquad;
      }
    }
    return initialSquad;
  });

  // Save squad to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('npfc-squad', JSON.stringify(squad));
  }, [squad]);

  const addPlayer = (playerData: Omit<Player, 'id' | 'trainingHistory'>) => {
    const newPlayer: Player = {
      ...playerData,
      id: uuidv4(),
      trainingHistory: []
    };

    setSquad(prev => ({
      ...prev,
      players: [...prev.players, newPlayer]
    }));
    
    toast({
      title: "Player added",
      description: `${playerData.name} has been added to your squad.`
    });
  };

  const updatePlayer = (updatedPlayer: Player) => {
    setSquad(prev => ({
      ...prev,
      players: prev.players.map(player => 
        player.id === updatedPlayer.id ? updatedPlayer : player
      )
    }));
  };

  const removePlayer = (playerId: string) => {
    setSquad(prev => {
      const playerToRemove = prev.players.find(p => p.id === playerId);
      const newSquad = {
        ...prev,
        players: prev.players.filter(player => player.id !== playerId)
      };

      if (playerToRemove) {
        toast({
          title: "Player removed",
          description: `${playerToRemove.name} has been removed from your squad.`
        });
      }
      
      return newSquad;
    });
  };

  const toggleTrainingPriority = (playerId: string) => {
    setSquad(prev => ({
      ...prev,
      players: prev.players.map(player => 
        player.id === playerId 
          ? { ...player, trainingPriority: !player.trainingPriority } 
          : player
      )
    }));
  };

  const applyTrainingToPlayer = (playerId: string, comboId: string | null) => {
    const today = new Date().toISOString();
    const trainingEntry: TrainingHistoryEntry = {
      trained: comboId !== null,
      comboId,
      date: today
    };

    setSquad(prev => ({
      ...prev,
      players: prev.players.map(player => {
        if (player.id === playerId) {
          // Update player's training history
          const updatedHistory = [trainingEntry, ...player.trainingHistory.slice(0, 3)];
          
          // Update fatigue based on training
          let newFatigue: FatigueStatus = player.fatigue;
          if (comboId !== null) {
            // Training increases fatigue
            if (player.fatigue === "Green") newFatigue = "Amber";
            else if (player.fatigue === "Amber") newFatigue = "Red";
          } else {
            // Rest decreases fatigue
            if (player.fatigue === "Red") newFatigue = "Amber";
            else if (player.fatigue === "Amber") newFatigue = "Green";
          }

          return {
            ...player,
            trainingHistory: updatedHistory,
            fatigue: newFatigue
          };
        }
        return player;
      })
    }));
  };

  const runTrainingCamp = () => {
    const today = new Date().toISOString();
    
    setSquad(prev => ({
      ...prev,
      lastTrainingCamp: today,
      trainingCampCount: prev.trainingCampCount + 1
    }));
    
    toast({
      title: "Training Camp Complete",
      description: `Training camp #${squad.trainingCampCount + 1} has been completed.`
    });
  };

  const getUntrainedPriorityPlayers = () => {
    return squad.players.filter(player => 
      player.trainingPriority && 
      (!player.trainingHistory.length || 
       player.trainingHistory[0].date !== squad.lastTrainingCamp)
    );
  };

  const resetSquad = () => {
    setSquad(initialSquad);
    toast({
      title: "Squad Reset",
      description: "Your squad has been reset."
    });
  };

  const updatePlayerFatigue = (playerId: string, fatigue: FatigueStatus) => {
    setSquad(prev => ({
      ...prev,
      players: prev.players.map(player => 
        player.id === playerId ? { ...player, fatigue } : player
      )
    }));
  };

  return {
    squad,
    addPlayer,
    updatePlayer,
    removePlayer,
    toggleTrainingPriority,
    applyTrainingToPlayer,
    runTrainingCamp,
    getUntrainedPriorityPlayers,
    resetSquad,
    updatePlayerFatigue
  };
}
