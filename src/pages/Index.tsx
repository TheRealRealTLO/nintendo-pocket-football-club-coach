
import React from 'react';
import Header from '@/components/Header';
import CardInventory from '@/components/CardInventory';
import ComboList from '@/components/ComboList';
import { useInventory } from '@/hooks/useInventory';
import { useCombos } from '@/hooks/useCombos';

const Index = () => {
  const { 
    inventory, 
    updateCardQuantity, 
    applyCombo, 
    undoLastCombo, 
    resetInventory 
  } = useInventory();
  
  const { 
    availableCombos,
    filteredCombos,
    selectedStat,
    setSelectedStat,
  } = useCombos(inventory);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 pb-12">
        <CardInventory 
          inventory={inventory.cards} 
          updateCardQuantity={updateCardQuantity}
          resetInventory={resetInventory}
        />
        
        <ComboList 
          availableCombos={availableCombos}
          filteredCombos={filteredCombos}
          selectedStat={selectedStat}
          setSelectedStat={setSelectedStat}
          applyCombo={applyCombo}
          undoLastCombo={undoLastCombo}
          hasHistory={inventory.history.length > 0}
        />
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

export default Index;
