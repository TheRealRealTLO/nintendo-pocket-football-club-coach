
import React, { useState } from 'react';
import { TrainingCombo, allStatTypes, statColors, StatType } from '../data/combos';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import ComboItem from './ComboItem';
import { Undo2, Filter, ArrowDownAZ, ArrowUpAZ } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ComboListProps {
  availableCombos: TrainingCombo[];
  filteredCombos: TrainingCombo[];
  selectedStat: StatType | null;
  setSelectedStat: (stat: StatType | null) => void;
  applyCombo: (comboId: string, cards: any[]) => void;
  undoLastCombo: () => void;
  hasHistory: boolean;
}

type PositionFilter = "ALL" | "GK" | "DF" | "MF" | "FW" | null;
type SortOption = "none" | "stat-high" | "stat-low";

const ComboList: React.FC<ComboListProps> = ({
  availableCombos,
  filteredCombos,
  selectedStat,
  setSelectedStat,
  applyCombo,
  undoLastCombo,
  hasHistory
}) => {
  // Additional filters
  const [positionFilter, setPositionFilter] = useState<PositionFilter>(null);
  const [sortOption, setSortOption] = useState<SortOption>("none");

  // Handler for applying a combo
  const handleApplyCombo = (combo: TrainingCombo) => {
    applyCombo(combo.id, combo.cards);
    toast({
      title: "Combo Applied",
      description: `${combo.name} has been applied and cards have been deducted from your inventory.`
    });
  };

  // Handler for undoing the last action
  const handleUndo = () => {
    undoLastCombo();
    toast({
      title: "Combo Undone",
      description: "Your last combo has been reversed and cards have been returned to your inventory."
    });
  };

  // Filter and sort combos based on selected filters
  const getFilteredAndSortedCombos = (combos: TrainingCombo[]) => {
    // First apply position filter if selected
    let result = combos;
    if (positionFilter) {
      result = result.filter(combo => 
        combo.recommendedPosition === positionFilter || 
        combo.recommendedPosition === "ALL" ||
        !combo.recommendedPosition
      );
    }
    
    // Then sort based on sort option
    if (sortOption !== "none" && selectedStat) {
      result = [...result].sort((a, b) => {
        const valueA = a.stats[selectedStat] || 0;
        const valueB = b.stats[selectedStat] || 0;
        return sortOption === "stat-high" ? valueB - valueA : valueA - valueB;
      });
    }
    
    return result;
  };

  // Get filtered and sorted combos
  const processedAvailableCombos = getFilteredAndSortedCombos(availableCombos);
  const processedFilteredCombos = getFilteredAndSortedCombos(filteredCombos);

  // Render filter badges
  const renderStatFilters = () => (
    <div className="mb-4">
      <p className="font-pixel text-xs mb-2">Filter by stat:</p>
      <div className="flex flex-wrap gap-2 justify-start">
        <Badge 
          className={`cursor-pointer ${!selectedStat ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedStat(null)}
        >
          All
        </Badge>
        {allStatTypes.map((stat) => (
          <Badge
            key={stat}
            className={`cursor-pointer ${statColors[stat]} ${selectedStat === stat ? 'ring-2 ring-black' : ''}`}
            onClick={() => setSelectedStat(stat)}
          >
            {stat}
          </Badge>
        ))}
      </div>
    </div>
  );

  // Render position and sort filters
  const renderAdvancedFilters = () => (
    <div className="mb-4 grid grid-cols-2 gap-2">
      <div>
        <p className="font-pixel text-xs mb-1">Position:</p>
        <Select value={positionFilter || undefined} onValueChange={(val) => setPositionFilter(val as PositionFilter)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Any Position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="null">Any Position</SelectItem>
            <SelectItem value="ALL">All Positions</SelectItem>
            <SelectItem value="GK">Goalkeeper</SelectItem>
            <SelectItem value="DF">Defender</SelectItem>
            <SelectItem value="MF">Midfielder</SelectItem>
            <SelectItem value="FW">Forward</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <p className="font-pixel text-xs mb-1">Sort by:</p>
        <Select value={sortOption} onValueChange={(val) => setSortOption(val as SortOption)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="No Sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Sorting</SelectItem>
            <SelectItem value="stat-high">Highest Stat First</SelectItem>
            <SelectItem value="stat-low">Lowest Stat First</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  // Helper to display combos list
  const renderCombosList = (combos: TrainingCombo[], showUnavailable = false) => {
    if (combos.length > 0) {
      return combos.map((combo) => {
        const isAvailable = availableCombos.some(c => c.id === combo.id) || !showUnavailable;
        return (
          <ComboItem
            key={combo.id}
            combo={combo}
            isAvailable={isAvailable}
            onApply={() => handleApplyCombo(combo)}
          />
        );
      });
    }
    
    return (
      <div className="text-center p-6">
        <p className="font-pixel text-sm text-gray-500">
          No {showUnavailable ? "" : "available "}combos match your filter.
          {selectedStat && " Try selecting a different stat or position."}
        </p>
      </div>
    );
  };

  return (
    <div className="pixel-card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-pixel text-lg text-black">Available Combos</h2>
        <Button
          className="pixel-button-red"
          disabled={!hasHistory}
          onClick={handleUndo}
        >
          <Undo2 size={16} className="mr-2" />
          Undo
        </Button>
      </div>

      {renderStatFilters()}
      {renderAdvancedFilters()}

      <Tabs defaultValue="available">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="available">Available ({processedFilteredCombos.length})</TabsTrigger>
          <TabsTrigger value="all">All Combos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="max-h-[60vh] overflow-y-auto py-2">
          {renderCombosList(processedFilteredCombos)}
        </TabsContent>

        <TabsContent value="all" className="max-h-[60vh] overflow-y-auto py-2">
          {renderCombosList(processedFilteredCombos, true)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComboList;
