
import React, { useState } from 'react';
import { TrainingCombo } from '../../data/combos';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import CombosTab from './CombosTab';
import ComboTable from './ComboTable';
import { Star } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

interface ComboTabsContainerProps {
  availableCombos: TrainingCombo[];
  filteredCombos: TrainingCombo[];
  allFilteredCombos: TrainingCombo[];
  selectedStat: boolean;
  onApplyCombo: (combo: TrainingCombo) => void;
  onResetFilters: () => void;
  showAllCombos?: boolean;
}

const ComboTabsContainer: React.FC<ComboTabsContainerProps> = ({
  availableCombos,
  filteredCombos,
  allFilteredCombos,
  selectedStat,
  onApplyCombo,
  onResetFilters,
  showAllCombos = false
}) => {
  const [view, setView] = useState<'grid' | 'table'>('grid');
  const recommendedCount = filteredCombos.filter(combo => combo.recommended).length;
  const isShowingRecommended = filteredCombos.every(combo => combo.recommended) && filteredCombos.length > 0;
  const isMobile = useIsMobile();
  
  return (
    <div>
      <div className="p-4 border-t">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
          <div className="flex flex-col">
            <h3 className="text-lg font-pixel">
              {showAllCombos ? "All Training Combos" : "Available Combos"} ({filteredCombos.length})
              {isShowingRecommended && (
                <span className="text-sm text-yellow-600 flex items-center gap-1 mt-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> 
                  Showing recommended combos ({recommendedCount})
                </span>
              )}
            </h3>
          </div>
          <div className="flex gap-2 w-full md:w-auto justify-between md:justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={onResetFilters}
              className="font-pixel text-xs"
            >
              Reset Filters
            </Button>
            {!isMobile && (
              <Tabs defaultValue="grid" className="w-auto" onValueChange={(value) => setView(value as 'grid' | 'table')}>
                <TabsList className="font-pixel text-xs">
                  <TabsTrigger value="grid" className="font-pixel text-xs">Grid</TabsTrigger>
                  <TabsTrigger value="table" className="font-pixel text-xs">Table</TabsTrigger>
                </TabsList>
              </Tabs>
            )}
          </div>
        </div>
        
        {(!isMobile && view === 'table') ? (
          <div className="overflow-x-auto">
            <ComboTable 
              combos={filteredCombos}
              availableCombos={availableCombos}
              onApplyCombo={onApplyCombo}
            />
          </div>
        ) : (
          <CombosTab 
            combos={filteredCombos}
            availableCombos={availableCombos}
            selectedStat={selectedStat}
            onApplyCombo={onApplyCombo}
          />
        )}

        {filteredCombos.length === 0 && allFilteredCombos.length > 0 && (
          <div className="text-center p-6">
            <p className="text-gray-600 font-pixel">No combos match your current filters.</p>
            <Button 
              className="mt-2 font-pixel text-xs"
              onClick={onResetFilters}
              variant="outline"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComboTabsContainer;
