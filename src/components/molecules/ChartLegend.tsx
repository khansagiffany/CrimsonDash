import React from 'react';

interface LegendItem {
  color: string;
  label: string;
  value?: string | number;
}

interface ChartLegendProps {
  items: LegendItem[];
  className?: string;
}

export const ChartLegend: React.FC<ChartLegendProps> = ({ items, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: item.color }}
          />
          <span className="text-text-secondary text-sm">
            {item.label}
            {item.value && (
              <span className="text-text-primary font-medium ml-1">
                {item.value}
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};