
import React, { useState } from 'react';
import { Plus, Minus, Save, RefreshCw, Star, Wrench, Activity, Users } from 'lucide-react';
import { 
  CardType, 
  CardCategory, 
  allCardTypes, 
  cardColors, 
  allCategories, 
  cardToCategory,
  categoryColors
} from '../data/combos';
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
  const [activeTab, setActiveTab] = useState<string>("All");
  const [activeCategory, setActiveCategory] = useState<CardCategory | "All">("All");
  
  // Get icon component based on category
  const getCategoryIcon = (category: CardCategory) => {
    switch (category) {
      case "Tactical": return <Star size={16} className="text-black" />;
      case "Technical": return <Wrench size={16} className="text-black" />;
      case "Physical": return <Activity size={16} className="text-black" />;
      case "Support": return <Users size={16} className="text-black" />;
      default: return null;
    }
  };
  
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

  // Group cards by category
  const cardsByCategory = allCategories.reduce((acc, category) => {
    acc[category] = allCardTypes.filter(type => cardToCategory[type] === category);
    return acc;
  }, {} as Record<CardCategory, CardType[]>);

  // Filter cards by active category
  const filteredCardTypes = activeCategory === "All" 
    ? allCardTypes 
    : allCardTypes.filter(type => cardToCategory[type] === activeCategory);
  
  // Group filtered cards into rows for display
  const cardRows = [];
  for (let i = 0; i < filteredCardTypes.length; i += 5) {
    cardRows.push(filteredCardTypes.slice(i, i + 5));
  }
  
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
          <div className="mb-4">
            <p className="font-pixel text-xs mb-2">Filter by category:</p>
            <div className="flex flex-wrap gap-2 justify-start">
              <button
                onClick={() => setActiveCategory("All")}
                className={`${activeCategory === "All" ? "bg-black text-white" : "bg-gray-200"} px-3 py-1 rounded-sm font-pixel text-xs`}
              >
                All
              </button>
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`${categoryColors[category]} flex items-center gap-1 px-3 py-1 rounded-sm font-pixel text-xs ${activeCategory === category ? "ring-2 ring-black" : ""}`}
                >
                  {getCategoryIcon(category)}
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {cardRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {row.map((type) => (
                <div 
                  key={type} 
                  className={`${cardColors[type]} border-2 border-black p-2 rounded-sm relative`}
                >
                  <div className="text-center mb-1 flex items-center justify-center gap-1">
                    {getCategoryIcon(cardToCategory[type])}
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
          <div className="mb-4 overflow-hidden">
            <div className="flex flex-wrap gap-2 bg-transparent justify-center">
              {allCategories.map(category => (
                <button 
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`${categoryColors[category]} flex items-center gap-1 text-black font-pixel text-xs px-3 py-2 rounded-sm ${activeTab === category ? "ring-2 ring-black" : ""}`}
                  style={{ minWidth: '90px' }}
                >
                  {getCategoryIcon(category)}
                  {category}
                </button>
              ))}

              <div className="w-full mt-3"></div> {/* Line break after categories */}

              <div className="flex flex-wrap gap-2 justify-center">
                {allCardTypes.map(cardType => (
                  <button 
                    key={cardType}
                    onClick={() => setActiveTab(cardType)}
                    className={`${cardColors[cardType]} text-black font-pixel text-xs px-3 py-2 rounded-sm ${activeTab === cardType ? "ring-2 ring-black" : ""}`}
                    style={{ minWidth: '90px' }}
                  >
                    {cardType}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center p-4">
            <div 
              className={`${cardColors[activeTab as CardType] || categoryColors[activeTab as CardCategory] || "bg-gray-200"} 
                border-2 border-black p-4 rounded-sm mb-4 w-full max-w-xs relative z-10`}
            >
              <div className="text-center mb-4 flex items-center justify-center gap-2">
                {allCategories.includes(activeTab as CardCategory) ? 
                  getCategoryIcon(activeTab as CardCategory) : 
                  getCategoryIcon(cardToCategory[activeTab as CardType])}
                <span className="font-pixel text-sm text-black">{activeTab}</span>
              </div>
              
              {allCardTypes.includes(activeTab as CardType) ? (
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
              ) : (
                <div className="space-y-3">
                  {allCardTypes
                    .filter(type => cardToCategory[type] === activeTab)
                    .map(type => (
                      <div key={type} className="flex items-center justify-between">
                        <span className="font-pixel text-xs text-black">{type}</span>
                        <div className="flex items-center space-x-2">
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
                    ))
                  }
                </div>
              )}
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
