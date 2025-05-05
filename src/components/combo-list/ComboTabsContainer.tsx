
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TrainingCombo } from '../../data/combos';
import CombosTab from './CombosTab';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ComboTabsContainerProps {
  availableCombos: TrainingCombo[];
  filteredCombos: TrainingCombo[];
  allFilteredCombos: TrainingCombo[];
  selectedStat: boolean;
  onApplyCombo: (combo: TrainingCombo) => void;
}

const ComboTabsContainer: React.FC<ComboTabsContainerProps> = ({
  availableCombos,
  filteredCombos,
  allFilteredCombos,
  selectedStat,
  onApplyCombo
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter combos based on search query - make sure it's an exact match within the name
  const filterBySearch = (combos: TrainingCombo[]) => {
    if (!searchQuery.trim()) return combos;
    
    return combos.filter(combo => 
      combo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  const searchedAvailableCombos = filterBySearch(filteredCombos);
  const searchedAllCombos = filterBySearch(allFilteredCombos);
  
  // Ensure we use the correct key for each combo to prevent duplicate key warnings
  const ensureUniqueKeys = (combos: TrainingCombo[]) => {
    return combos.map(combo => ({
      ...combo,
      key: `combo-${combo.id}`
    }));
  };

  return (
    <div>
      <div className="relative mb-4">
        <Input
          placeholder="Search combination name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
      </div>
      
      <Tabs defaultValue="available">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="available">Available ({searchedAvailableCombos.length})</TabsTrigger>
          <TabsTrigger value="all">All Training Combinations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="max-h-[60vh] overflow-y-auto py-2">
          <CombosTab 
            combos={ensureUniqueKeys(searchedAvailableCombos)}
            availableCombos={availableCombos}
            selectedStat={selectedStat}
            onApplyCombo={onApplyCombo}
          />
        </TabsContent>

        <TabsContent value="all" className="max-h-[60vh] overflow-y-auto py-2">
          <CombosTab 
            combos={ensureUniqueKeys(searchedAllCombos)}
            availableCombos={availableCombos}
            selectedStat={selectedStat}
            onApplyCombo={onApplyCombo}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComboTabsContainer;
