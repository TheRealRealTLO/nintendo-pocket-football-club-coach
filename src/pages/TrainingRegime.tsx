
import React, { useState } from 'react';
import Header from '@/components/Header';
import { usePlayerSquad } from '@/hooks/usePlayerSquad';
import PlayerList from '@/components/training-regime/PlayerList';
import AddPlayerForm from '@/components/training-regime/AddPlayerForm';
import TrainingCamp from '@/components/training-regime/TrainingCamp';
import { Button } from '@/components/ui/button';
import { useInventory } from '@/hooks/useInventory';
import { useCombos } from '@/hooks/useCombos';
import { Plus, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TrainingRegime: React.FC = () => {
  const [isAddPlayerOpen, setIsAddPlayerOpen] = useState(false);
  const { 
    squad, 
    addPlayer, 
    updatePlayer, 
    removePlayer, 
    toggleTrainingPriority,
    applyTrainingToPlayer,
    runTrainingCamp,
    getUntrainedPriorityPlayers,
    resetSquad
  } = usePlayerSquad();
  
  const { inventory, updateCardQuantity, applyCombo } = useInventory();
  const { availableCombos } = useCombos(inventory);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 pb-12">
        <h1 className="font-pixel text-2xl mb-6 text-center bg-npfc-blue text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.8)]">
          TRAINING REGIME
        </h1>
        
        <Tabs defaultValue="squad" className="mb-8">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="squad" className="font-pixel">Squad Management</TabsTrigger>
            <TabsTrigger value="camp" className="font-pixel">Training Camp</TabsTrigger>
          </TabsList>
          
          <TabsContent value="squad" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Users className="mr-2" />
                <h2 className="font-pixel text-xl">Squad: {squad.players.length} Players</h2>
              </div>
              <Button 
                onClick={() => setIsAddPlayerOpen(true)}
                className="pixel-button bg-npfc-green text-black border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,0.8)] hover:bg-npfc-green-dark"
              >
                <Plus size={16} /> 
                <span className="font-pixel">Add Player</span>
              </Button>
            </div>
            
            {squad.players.length === 0 ? (
              <div className="bg-white p-6 rounded-md text-center shadow-md">
                <p className="font-pixel text-lg mb-4">No players in your squad yet.</p>
                <Button 
                  onClick={() => setIsAddPlayerOpen(true)}
                  className="pixel-button bg-npfc-green text-black border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,0.8)] hover:bg-npfc-green-dark"
                >
                  <Plus size={16} /> 
                  <span className="font-pixel">Add Your First Player</span>
                </Button>
              </div>
            ) : (
              <PlayerList 
                players={squad.players}
                onRemovePlayer={removePlayer}
                onTogglePriority={toggleTrainingPriority}
              />
            )}
            
            {isAddPlayerOpen && (
              <AddPlayerForm 
                onAddPlayer={addPlayer} 
                onClose={() => setIsAddPlayerOpen(false)} 
              />
            )}
          </TabsContent>
          
          <TabsContent value="camp">
            <TrainingCamp
              players={squad.players}
              priorityPlayers={squad.players.filter(p => p.trainingPriority)}
              availableCombos={availableCombos}
              inventory={inventory.cards}
              onApplyTraining={(playerId, comboId) => {
                // Apply training to player
                applyTrainingToPlayer(playerId, comboId);
                
                // If combo applied (not rest), deduct cards from inventory
                if (comboId) {
                  const combo = availableCombos.find(c => c.id === comboId);
                  if (combo) {
                    applyCombo(comboId, combo.cards);
                  }
                }
              }}
              onRunCamp={runTrainingCamp}
              lastTrainingCamp={squad.lastTrainingCamp}
              trainingCampCount={squad.trainingCampCount}
            />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="border-t-4 border-black bg-npfc-green-dark p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="font-pixel text-xs text-black">
            Nintendo Pocket Football Club Coach | © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TrainingRegime;
