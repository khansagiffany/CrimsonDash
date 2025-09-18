'use client';

import React from 'react';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { Button } from '../atoms/Button';

interface FilterControlProps {
  minSales: number;
  maxSales: number;
  onMinSalesChange: (value: number) => void;
  onMaxSalesChange: (value: number) => void;
  onReset: () => void;
}

export const FilterControl: React.FC<FilterControlProps> = ({
  minSales,
  maxSales,
  onMinSalesChange,
  onMaxSalesChange,
  onReset,
}) => {
  return (
    <div className="bg-background-secondary p-6 rounded-xl border border-border-DEFAULT">
      <h3 className="text-lg font-semibold text-text-primary mb-4">Sales Filter</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="minSales">Minimum Sales ($)</Label>
          <Input
            id="minSales"
            type="number"
            value={minSales}
            onChange={(e) => onMinSalesChange(Number(e.target.value))}
            placeholder="0"
            min={0}
          />
        </div>
        <div>
          <Label htmlFor="maxSales">Maximum Sales ($)</Label>
          <Input
            id="maxSales"
            type="number"
            value={maxSales}
            onChange={(e) => onMaxSalesChange(Number(e.target.value))}
            placeholder="1000000"
            min={0}
          />
        </div>
      </div>
      <Button variant="outline" onClick={onReset} size="sm">
        Reset Filters
      </Button>
    </div>
  );
};