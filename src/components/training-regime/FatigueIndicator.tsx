
import React from 'react';
import { FatigueStatus } from '@/data/playerTypes';
import { Battery, BatteryMedium, BatteryLow } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface FatigueIndicatorProps {
  status: FatigueStatus;
  size?: number;
}

const FatigueIndicator: React.FC<FatigueIndicatorProps> = ({ status, size = 16 }) => {
  let icon;
  let tooltipText;

  switch (status) {
    case 'Green':
      icon = <Battery size={size} className="text-green-500" />;
      tooltipText = "Fresh (Green)";
      break;
    case 'Amber':
      icon = <BatteryMedium size={size} className="text-amber-500" />;
      tooltipText = "Tired (Amber)";
      break;
    case 'Red':
      icon = <BatteryLow size={size} className="text-red-500" />;
      tooltipText = "Fatigued (Red)";
      break;
    default:
      return null;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex">{icon}</span>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default FatigueIndicator;
