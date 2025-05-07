
import React from 'react';
import { TrainingCombo } from '../../data/combos';
import { Button } from '@/components/ui/button';
import PositionBadge from '../combo-item/PositionBadge';
import CardRequirementBadge from '../combo-item/CardRequirementBadge';
import StatBadge from '../combo-item/StatBadge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { allStatTypes } from '@/data/combos';
import { Star } from 'lucide-react';

interface ComboTableProps {
  combos: (TrainingCombo & { key?: string })[];
  availableCombos: TrainingCombo[];
  onApplyCombo: (combo: TrainingCombo) => void;
}

const ComboTable: React.FC<ComboTableProps> = ({
  combos,
  availableCombos,
  onApplyCombo
}) => {
  return (
    <div className="overflow-x-auto">
      <Table className="border-collapse">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="font-pixel text-sm text-black">Combo Name</TableHead>
            <TableHead className="font-pixel text-sm text-black">Position</TableHead>
            <TableHead className="font-pixel text-sm text-black">Card Requirements</TableHead>
            <TableHead className="font-pixel text-sm text-black">Stat Improvements</TableHead>
            <TableHead className="font-pixel text-sm text-black">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {combos.map((combo) => {
            const isAvailable = availableCombos.some(c => c.id === combo.id);
            
            return (
              <TableRow 
                key={combo.key || `combo-${combo.id}`}
                className={`border-b ${isAvailable ? '' : 'opacity-50'}`}
              >
                <TableCell className="font-pixel text-sm py-2">
                  <div className="flex items-center gap-1">
                    {combo.name}
                    {combo.recommended && (
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                </TableCell>
                <TableCell className="py-2">
                  {combo.recommendedPosition && (
                    <PositionBadge position={combo.recommendedPosition} />
                  )}
                </TableCell>
                <TableCell className="py-2">
                  <div className="flex flex-wrap gap-1">
                    {combo.cards.map((card, index) => (
                      <CardRequirementBadge 
                        key={index} 
                        cardType={card.type} 
                        quantity={card.quantity} 
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell className="py-2">
                  <div className="flex flex-wrap gap-1">
                    {allStatTypes.map((stat) => (
                      combo.stats[stat] ? (
                        <StatBadge 
                          key={stat} 
                          stat={stat} 
                          value={combo.stats[stat]!}
                        />
                      ) : null
                    ))}
                  </div>
                </TableCell>
                <TableCell className="py-2">
                  <Button
                    className="pixel-button w-full py-1 h-auto text-xs"
                    disabled={!isAvailable}
                    onClick={() => onApplyCombo(combo)}
                  >
                    Apply
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComboTable;
