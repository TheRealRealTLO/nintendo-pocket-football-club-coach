
import React, { useState, useEffect } from 'react';
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
  const [searchedAvailableCombos, setSearchedAvailableCombos] = useState<TrainingCombo[]>(filteredCombos);
  const [searchedAllCombos, setSearchedAllCombos] = useState<TrainingCombo[]>(allFilteredCombos);
  
  // Filter combos based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchedAvailableCombos(filteredCombos);
      setSearchedAllCombos(allFilteredCombos);
      return;
    }
    
    const query = searchQuery.toLowerCase().trim();
    
    const filteredAvailable = filteredCombos.filter(combo => 
      combo.name.toLowerCase().includes(query)
    );
    
    const filteredAll = allFilteredCombos.filter(combo => 
      combo.name.toLowerCase().includes(query)
    );
    
    setSearchedAvailableCombos(filteredAvailable);
    setSearchedAllCombos(filteredAll);
    
    // For debugging
    console.log(`Searching for: "${query}"`);
    console.log(`Available matches: ${filteredAvailable.length}`);
    console.log(`All matches: ${filteredAll.length}`);
  }, [searchQuery, filteredCombos, allFilteredCombos]);
  
  // Ensure we use the correct key for each combo to prevent duplicate key warnings
  const ensureUniqueKeys = (combos: TrainingCombo[]) => {
    return combos.map(combo => ({
      ...combo,
      key: `combo-${combo.id}-${combo.name.replace(/\s+/g, '')}`
    }));
  };

  return (
    <div>
      <div className="relative mb-4">
        <div className="relative flex-grow">
          <Input
            placeholder="Search combination name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
      </div>
      
      <Tabs defaultValue="available">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="available" className="font-pixel text-xs border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-white data-[state=active]:font-bold">
            Available ({searchedAvailableCombos.length})
          </TabsTrigger>
          <TabsTrigger value="all" className="font-pixel text-xs border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-white data-[state=active]:font-bold">
            All Training Combinations
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="max-h-[60vh] overflow-y-auto py-2">
          <CombosTab 
            combos={ensureUniqueKeys(searchedAvailableCombos)}
            availableCombos={availableCombos}
            selectedStat={selectedStat}
            onApplyCombo={onApplyCombo}
            viewMode="grid"
          />
        </TabsContent>

        <TabsContent value="all" className="max-h-[60vh] overflow-y-auto py-2">
          <CombosTab 
            combos={ensureUniqueKeys(searchedAllCombos)}
            availableCombos={availableCombos}
            selectedStat={selectedStat}
            onApplyCombo={onApplyCombo}
            viewMode="grid"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComboTabsContainer;
