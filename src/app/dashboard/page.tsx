'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { SalesOverview } from '@/components/organisms/SalesOverview';
import { BarChart } from '@/components/organisms/BarChart';
import { LineChart } from '@/components/organisms/LineChart';
import { PieChart } from '@/components/organisms/PieChart';
import { FilterControl } from '@/components/molecules/FilterControl';
import { Button } from '@/components/atoms/Button';
import { chartData } from '@/data/salesData';
import { ChartType } from '@/types/sales';
import { BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon } from 'lucide-react';

export default function Dashboard() {
  const [activeChartType, setActiveChartType] = useState<ChartType>('bar');
  const [minSales, setMinSales] = useState<number>(0);
  const [maxSales, setMaxSales] = useState<number>(150000);

  const handleReset = () => {
    setMinSales(0);
    setMaxSales(150000);
  };

  // Filter data based on sales range
  const filteredMonthlyData = chartData.monthly.map(month => ({
    ...month,
    '2022': month['2022'] >= minSales && month['2022'] <= maxSales ? month['2022'] : 0,
    '2023': month['2023'] >= minSales && month['2023'] <= maxSales ? month['2023'] : 0,
    '2024': month['2024'] >= minSales && month['2024'] <= maxSales ? month['2024'] : 0,
  }));

  const renderChart = () => {
    switch (activeChartType) {
      case 'bar':
        return <BarChart data={filteredMonthlyData} />;
      case 'line':
        return <LineChart data={filteredMonthlyData} />;
      case 'pie':
        return <PieChart data={chartData.categories} />;
      default:
        return <BarChart data={filteredMonthlyData} />;
    }
  };

  const chartButtons = [
    { type: 'bar' as ChartType, icon: BarChart3, label: 'Bar Chart' },
    { type: 'line' as ChartType, icon: LineChartIcon, label: 'Line Chart' },
    { type: 'pie' as ChartType, icon: PieChartIcon, label: 'Pie Chart' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-2">
            Futuristic Sales Dashboard
          </h1>
          <p className="text-text-secondary text-lg">
            Comprehensive sales analytics for 2022-2024 with advanced filtering
          </p>
        </div>

        {/* Sales Overview */}
        <SalesOverview data={chartData.yearly} />

        {/* Filter Controls */}
        <FilterControl
          minSales={minSales}
          maxSales={maxSales}
          onMinSalesChange={setMinSales}
          onMaxSalesChange={setMaxSales}
          onReset={handleReset}
        />

        {/* Chart Type Selector */}
        <div className="bg-background-secondary p-6 rounded-xl border border-border-DEFAULT">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Chart View</h3>
          <div className="flex flex-wrap gap-3">
            {chartButtons.map((button) => {
              const Icon = button.icon;
              return (
                <Button
                  key={button.type}
                  variant={activeChartType === button.type ? 'primary' : 'secondary'}
                  onClick={() => setActiveChartType(button.type)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{button.label}</span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Chart */}
        <div className="animate-fade-in">
          {renderChart()}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background-secondary p-6 rounded-xl border border-border-DEFAULT">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Key Features</h3>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-800 rounded-full"></div>
                <span>Interactive charts with multiple view types</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-800 rounded-full"></div>
                <span>Custom sales threshold filtering</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-800 rounded-full"></div>
                <span>Year-over-year growth analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-800 rounded-full"></div>
                <span>Category-wise sales distribution</span>
              </li>
            </ul>
          </div>

          <div className="bg-background-secondary p-6 rounded-xl border border-border-DEFAULT">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Technology Stack</h3>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-800 rounded-full"></div>
                <span>Next.js 15 with App Router</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-800 rounded-full"></div>
                <span>TypeScript for type safety</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-800 rounded-full"></div>
                <span>Tailwind CSS for styling</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-800 rounded-full"></div>
                <span>Recharts for data visualization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}