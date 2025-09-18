'use client';

import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MonthlySales } from '@/types/sales';

interface BarChartProps {
  data: MonthlySales[];
  className?: string;
}

export const BarChart: React.FC<BarChartProps> = ({ data, className = '' }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background-secondary p-4 border border-border-DEFAULT rounded-lg shadow-lg">
          <p className="text-text-primary font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-text-secondary">
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
              {entry.dataKey}: <span className="text-text-primary font-medium">{formatCurrency(entry.value)}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`bg-background-secondary p-6 rounded-xl border border-border-DEFAULT ${className}`}>
      <h3 className="text-xl font-semibold text-text-primary mb-6">Monthly Sales Comparison</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="month" 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
            />
            <YAxis 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af' }}
              tickFormatter={formatCurrency}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ color: '#9ca3af' }}
            />
            <Bar dataKey="2022" fill="#fca5a5" name="2022" radius={[2, 2, 0, 0]} />
            <Bar dataKey="2023" fill="#dc2626" name="2023" radius={[2, 2, 0, 0]} />
            <Bar dataKey="2024" fill="#820000" name="2024" radius={[2, 2, 0, 0]} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};