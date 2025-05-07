
import React, { useState } from 'react';
import { TrainingCombo, StatType } from '../data/combos';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import FilterBadges from './combo-list/FilterBadges';
import AdvancedFilters from './combo-list/AdvancedFilters';
import ComboTabsContainer from './combo-list/ComboTabsContainer';
import HeaderSection from './combo-list/HeaderSection';
import { useComboFiltering } from './combo-list/useComboFiltering';
import { useIsMobile } from '../hooks/use-mobile';
import SearchBar from './combo-list/SearchBar';

interface ComboListProps {
  availableCombos: TrainingCombo[];
  filteredCombos: TrainingCombo[];
  selectedStat: StatType | null;
  setSelectedStat: (stat: StatType | null) => void;
  applyCombo: (comboId: string, cards: any[]) => void;
  undoLastCombo: () => void;
  hasHistory: boolean;
  allCombos: TrainingCombo[]; // New prop for all combos
}

const ComboList: React.FC<ComboListProps> = ({
  availableCombos,
  filteredCombos,
  selectedStat,
  setSelectedStat: originalSetSelectedStat,
  applyCombo,
  undoLastCombo,
  hasHistory,
  allCombos
}) => {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showAllCombos, setShowAllCombos] = useState<boolean>(false); // Toggle between all combos and available combos
  const isMobile = useIsMobile();
  
  // Enhanced setSelectedStat that can also toggle sort direction
  const setSelectedStatWithToggle = (stat: StatType | null, toggleSort = false) => {
    if (toggleSort && stat === selectedStat) {
      // Toggle sort direction if clicking the same stat again
      setSortDirection(prev => prev === 'desc' ? 'asc' : 'desc');
    } else if (toggleSort && stat !== null) {
      // Default to descending order when selecting a new stat
      setSortDirection('desc');
    }
    originalSetSelectedStat(stat);
  };

  // Use the custom hook for filtering logic, now passing sort direction
  const {
    positionFilter,
    setPositionFilter,
    recommendedOnly,
    setRecommendedOnly,
    searchTerm,
    setSearchTerm,
    processedFilteredCombos,
    allFilteredCombos
  } = useComboFiltering(
    showAllCombos ? allCombos : availableCombos, 
    showAllCombos ? allCombos.filter(c => selectedStat ? c.stats[selectedStat] : true) : filteredCombos, 
    selectedStat, 
    sortDirection
  );

  // Reset all filters
  const resetAllFilters = () => {
    setSelectedStatWithToggle(null);
    setPositionFilter(null);
    setRecommendedOnly(false);
    setSearchTerm('');
  };

  // Handler for applying a combo
  const handleApplyCombo = (combo: TrainingCombo) => {
    const isAvailable = availableCombos.some(c => c.id === combo.id);
    if (!isAvailable) {
      toast({
        title: "Missing Cards",
        description: "You don't have all the required cards for this combo.",
        variant: "destructive"
      });
      return;
    }
    
    applyCombo(combo.id, combo.cards);
    toast({
      title: "Combo Applied",
      description: `${combo.name} has been applied and cards have been deducted from your inventory.`
    });
  };

  const getPositionColor = (position: string, isSelected: boolean) => {
    if (!isSelected) return "bg-gray-200 hover:bg-gray-300 text-gray-700";
    
    switch(position) {
      case "GK": return "bg-orange-300 text-black";
      case "DF": return "bg-blue-300 text-black";
      case "MF": return "bg-green-300 text-black";
      case "FW": return "bg-red-300 text-black";
      case "ALL": return "bg-purple-300 text-black";
      case "GENERAL": return "bg-gray-300 text-black";
      default: return "bg-gray-300 text-black";
    }
  };

  return (
    <div className="pixel-card">
      <HeaderSection 
        hasHistory={hasHistory} 
        onUndo={undoLastCombo}
        showAllCombos={showAllCombos}
        setShowAllCombos={setShowAllCombos}
      />

      {/* Add search bar */}
      <div className="px-4 pt-2 pb-0">
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      {isMobile ? (
        <div className="mb-4">
          <div className="p-3 bg-gray-50 rounded-lg mb-2">
            <h3 className="text-sm font-pixel mb-2">Filters:</h3>
            <FilterBadges
              selectedStat={selectedStat}
              sortDirection={sortDirection}
              setSelectedStat={setSelectedStatWithToggle}
            />
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="flex flex-wrap gap-2 mb-3">
              <h3 className="text-sm font-pixel w-full mb-1">Position:</h3>
              <div className="flex flex-wrap gap-1">
                {["ALL", "GENERAL", "GK", "DF", "MF", "FW"].map(position => (
                  <Button
                    key={position}
                    variant="outline"
                    onClick={() => setPositionFilter(positionFilter === position ? null : position)}
                    className={`h-7 px-2 text-xs font-pixel border-2 
                      ${getPositionColor(position, positionFilter === position)}`}
                    size="sm"
                  >
                    {position}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={recommendedOnly ? "default" : "outline"}
                onClick={() => setRecommendedOnly(!recommendedOnly)}
                className="h-7 px-2 text-xs font-pixel w-full"
                size="sm"
              >
                {recommendedOnly ? "Recommended Only" : "Show All Combos"}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <AdvancedFilters
          positionFilter={positionFilter}
          setPositionFilter={setPositionFilter}
          selectedStat={selectedStat}
          sortDirection={sortDirection}
          setSelectedStat={setSelectedStatWithToggle}
          recommendedOnly={recommendedOnly}
          setRecommendedOnly={setRecommendedOnly}
        />
      )}

      <ComboTabsContainer
        availableCombos={availableCombos}
        filteredCombos={processedFilteredCombos}
        allFilteredCombos={allFilteredCombos}
        selectedStat={!!selectedStat}
        onApplyCombo={handleApplyCombo}
        onResetFilters={resetAllFilters}
        showAllCombos={showAllCombos}
      />
    </div>
  );
};

export default ComboList;
