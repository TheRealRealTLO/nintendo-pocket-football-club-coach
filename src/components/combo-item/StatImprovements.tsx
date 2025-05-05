
import React from 'react';
import { StatType, allStatTypes } from '../../data/combos';
import StatBadge from './StatBadge';

interface StatImprovementsProps {
  stats: {
    [key in StatType]?: number;
  };
}

const StatImprovements: React.FC<StatImprovementsProps> = ({ stats }) => {
  return (
    <div>
      <p className="font-pixel text-xs mb-1 text-right">Improves:</p>
      <div className="flex flex-wrap gap-1 justify-end">
        {allStatTypes.map((stat) => (
          stats[stat] ? (
            <StatBadge 
              key={stat} 
              stat={stat} 
              value={stats[stat]!}
            />
          ) : null
        ))}
      </div>
    </div>
  );
};

export default StatImprovements;
