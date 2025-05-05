
import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TrainingCombo } from '../../data/combos';
import CombosTab from './CombosTab';
import { Input } from '@/components/ui/input';
import { Search, Table, LayoutGrid } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

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
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  
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
      <div className="relative mb-4 flex items-center gap-2">
        <div className="relative flex-grow">
          <Input
            placeholder="Search combination name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
        
        <div className="flex items-center border rounded-md">
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle 
                pressed={viewMode === 'table'} 
                onPressedChange={() => setViewMode('table')}
                className="rounded-r-none border-r"
              >
                <Table size={16} />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Table View</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle 
                pressed={viewMode === 'grid'} 
                onPressedChange={() => setViewMode('grid')}
                className="rounded-l-none"
              >
                <LayoutGrid size={16} />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Grid View</TooltipContent>
          </Tooltip>
        </div>
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
