
import React from 'react';
import { FatigueStatus } from '@/data/playerTypes';
import { Battery, BatteryMedium, BatteryLow } from 'lucide-react';

interface FatigueIndicatorProps {
  status: FatigueStatus;
  size?: number;
}

const FatigueIndicator: React.FC<FatigueIndicatorProps> = ({ status, size = 16 }) => {
  switch (status) {
    case 'Green':
      return <Battery size={size} className="text-green-500" title="Fresh (Green)" />;
    case 'Amber':
      return <BatteryMedium size={size} className="text-amber-500" title="Tired (Amber)" />;
    case 'Red':
      return <BatteryLow size={size} className="text-red-500" title="Fatigued (Red)" />;
    default:
      return null;
  }
};

export default FatigueIndicator;
