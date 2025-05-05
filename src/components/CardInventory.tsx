
import React, { useState } from 'react';
import { Plus, Minus, Save, RefreshCw } from 'lucide-react';
import { CardType, allCardTypes, cardColors } from '../data/combos';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface CardInventoryProps {
  inventory: { [key in CardType]: number };
  updateCardQuantity: (type: CardType, quantity: number) => void;
  resetInventory: () => void;
}

const CardInventory: React.FC<CardInventoryProps> = ({ 
  inventory, 
  updateCardQuantity,
  resetInventory
}) => {
  const [activeTab, setActiveTab] = useState<string>("Shooting");
  
  const handleIncrement = (type: CardType) => {
    updateCardQuantity(type, inventory[type] + 1);
  };
  
  const handleDecrement = (type: CardType) => {
    if (inventory[type] > 0) {
      updateCardQuantity(type, inventory[type] - 1);
    }
  };
  
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your inventory?')) {
      resetInventory();
      toast({
        title: "Inventory Reset",
        description: "Your card inventory has been reset",
      });
    }
  };

  // Group cards into rows of 5 for better UI layout
  const cardRows = [
    allCardTypes.slice(0, 5),
    allCardTypes.slice(5)
  ];
  
  return (
    <div className="pixel-card mb-6">
      <h2 className="font-pixel text-lg mb-4 text-black text-center">
        Card Inventory
      </h2>
      
      <Tabs defaultValue="all-cards" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="all-cards" className="font-pixel text-xs">All Cards</TabsTrigger>
          <TabsTrigger value="by-type" className="font-pixel text-xs">By Type</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all-cards" className="space-y-4">
          {cardRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {row.map((type) => (
                <div 
                  key={type} 
                  className={`${cardColors[type]} border-2 border-black p-2 rounded-sm`}
                >
                  <div className="text-center mb-1">
                    <span className="font-pixel text-xs text-black">{type}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <button 
                      onClick={() => handleDecrement(type)} 
                      className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center"
                      disabled={inventory[type] <= 0}
                    >
                      <Minus size={16} className="text-black" />
                    </button>
                    <span className="font-pixel text-sm w-6 text-center text-black">
                      {inventory[type]}
                    </span>
                    <button 
                      onClick={() => handleIncrement(type)} 
                      className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center"
                    >
                      <Plus size={16} className="text-black" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="by-type">
          <div className="mb-4">
            <TabsList className="flex flex-wrap gap-2 bg-transparent justify-center">
              {allCardTypes.map(type => (
                <TabsTrigger 
                  key={type}
                  value={type}
                  onClick={() => setActiveTab(type)}
                  className={`${cardColors[type]} text-black font-pixel text-xs`}
                  style={{ minWidth: '80px' }}
                >
                  {type}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <div className="flex flex-col items-center justify-center p-4">
            <div className={`${cardColors[activeTab as CardType]} border-2 border-black p-4 rounded-sm mb-4 w-full max-w-xs`}>
              <div className="text-center mb-4">
                <span className="font-pixel text-sm text-black">{activeTab}</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <button 
                  onClick={() => handleDecrement(activeTab as CardType)} 
                  className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center"
                  disabled={inventory[activeTab as CardType] <= 0}
                >
                  <Minus size={24} className="text-black" />
                </button>
                <span className="font-pixel text-2xl w-16 text-center text-black">
                  {inventory[activeTab as CardType]}
                </span>
                <button 
                  onClick={() => handleIncrement(activeTab as CardType)} 
                  className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center"
                >
                  <Plus size={24} className="text-black" />
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-center mt-4 gap-4">
        <Button 
          className="pixel-button-blue" 
          onClick={() => {
            toast({
              title: "Inventory Saved",
              description: "Your card inventory has been saved",
            });
          }}
        >
          <Save size={16} className="mr-2" />
          Save
        </Button>
        <Button 
          className="pixel-button-red" 
          onClick={handleReset}
        >
          <RefreshCw size={16} className="mr-2" />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CardInventory;
