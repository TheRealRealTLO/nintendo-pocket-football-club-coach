
import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TrainingCombo } from '../../data/combos';
import CombosTab from './CombosTab';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, RotateCcw } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ComboTabsContainerProps {
  availableCombos: TrainingCombo[];
  filteredCombos: TrainingCombo[];
  allFilteredCombos: TrainingCombo[];
  selectedStat: boolean;
  onApplyCombo: (combo: TrainingCombo) => void;
  onResetFilters: () => void;
}

const ComboTabsContainer: React.FC<ComboTabsContainerProps> = ({
  availableCombos,
  filteredCombos,
  allFilteredCombos,
  selectedStat,
  onApplyCombo,
  onResetFilters
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedAvailableCombos, setSearchedAvailableCombos] = useState<TrainingCombo[]>(filteredCombos);
  const [searchedAllCombos, setSearchedAllCombos] = useState<TrainingCombo[]>(allFilteredCombos);
  const isMobile = useIsMobile();
  
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
  }, [searchQuery, filteredCombos, allFilteredCombos]);
  
  // Ensure we use the correct key for each combo to prevent duplicate key warnings
  const ensureUniqueKeys = (combos: TrainingCombo[]) => {
    return combos.map(combo => ({
      ...combo,
      key: `combo-${combo.id}-${combo.name.replace(/\s+/g, '')}`
    }));
  };

  const resetSearch = () => {
    setSearchQuery('');
    onResetFilters();
  };

  return (
    <div>
      <div className="relative mb-4 flex gap-2">
        <div className="relative flex-grow">
          <Input
            placeholder={isMobile ? "Search combos..." : "Search combination name..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={resetSearch} 
          title="Reset search and filters"
          className="flex-shrink-0"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
      
      <Tabs defaultValue="available">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="available" className="font-pixel text-xs">
            Available ({searchedAvailableCombos.length})
          </TabsTrigger>
          <TabsTrigger value="all" className="font-pixel text-xs">
            {isMobile ? "All Combos" : "All Training Combinations"}
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
