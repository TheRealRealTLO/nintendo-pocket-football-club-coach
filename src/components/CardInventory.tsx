
import React, { useState } from 'react';
import { CardType, CardCategory, allCardTypes, allCategories, cardColors, categoryColors, cardToCategory } from '../data/combos';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './card-inventory/CustomTabs';
import CategoryFilter from './card-inventory/CategoryFilter';
import CardGrid from './card-inventory/CardGrid';
import TabsSelector from './card-inventory/TabsSelector';
import DetailedCardView from './card-inventory/DetailedCardView';
import ActionButtons from './card-inventory/ActionButtons';

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

  // Filter cards by active category
  const filteredCardTypes = activeCategory === "All" 
    ? allCardTypes 
    : allCardTypes.filter(type => cardToCategory[type] === activeCategory);
  
  return (
    <div className="pixel-card mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-pixel text-lg text-black">
          Card Inventory
        </h2>
        <ActionButtons onReset={resetInventory} />
      </div>
      
      <Tabs defaultValue="all-cards" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="all-cards" className="font-pixel text-xs">All Cards</TabsTrigger>
          <TabsTrigger value="by-type" className="font-pixel text-xs">By Category</TabsTrigger>
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
        
        <TabsContent value="by-type" className="pt-2">
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
    </div>
  );
};

export default CardInventory;
