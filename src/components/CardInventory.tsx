
import React, { useState } from 'react';
import { CardType, CardCategory, allCardTypes, allCategories, cardColors, categoryColors, cardToCategory } from '../data/combos';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './card-inventory/CustomTabs';
import CategoryFilter from './card-inventory/CategoryFilter';
import CardGrid from './card-inventory/CardGrid';
import TabsSelector from './card-inventory/TabsSelector';
import DetailedCardView from './card-inventory/DetailedCardView';
import ActionButtons from './card-inventory/ActionButtons';
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

  // Filter cards by active category
  const filteredCardTypes = activeCategory === "All" 
    ? allCardTypes 
    : allCardTypes.filter(type => cardToCategory[type] === activeCategory);
  
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
          <CategoryFilter 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
          
          <CardGrid 
            cardTypes={filteredCardTypes}
            inventory={inventory}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </TabsContent>
        
        <TabsContent value="by-type">
          <TabsSelector 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          
          <DetailedCardView 
            activeTab={activeTab}
            cardColors={cardColors}
            categoryColors={categoryColors}
            inventory={inventory}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            allCategories={allCategories}
          />
        </TabsContent>
      </Tabs>
      
      <ActionButtons onReset={handleReset} />
    </div>
  );
};

export default CardInventory;
