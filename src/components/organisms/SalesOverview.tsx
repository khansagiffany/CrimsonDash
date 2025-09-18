'use client';

import React from 'react';
import { YearlySummary } from '@/types/sales';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Target } from 'lucide-react';

interface SalesOverviewProps {
  data: YearlySummary[];
  className?: string;
}

export const SalesOverview: React.FC<SalesOverviewProps> = ({ data, className = '' }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const currentYear = data[data.length - 1];
  const previousYear = data[data.length - 2];

  const stats = [
    {
      title: 'Total Revenue',
      value: formatCurrency(currentYear.totalRevenue),
      change: currentYear.growthRate,
      icon: DollarSign,
      color: 'text-primary-800',
    },
    {
      title: 'Total Orders',
      value: formatNumber(currentYear.totalOrders),
      change: ((currentYear.totalOrders - previousYear.totalOrders) / previousYear.totalOrders) * 100,
      icon: ShoppingCart,
      color: 'text-blue-500',
    },
    {
      title: 'Avg Order Value',
      value: formatCurrency(currentYear.averageOrderValue),
      change: ((currentYear.averageOrderValue - previousYear.averageOrderValue) / previousYear.averageOrderValue) * 100,
      icon: Target,
      color: 'text-green-500',
    },
  ];

  const StatCard = ({ stat }: { stat: typeof stats[0] }) => {
    const isPositive = stat.change >= 0;
    const TrendIcon = isPositive ? TrendingUp : TrendingDown;

    return (
      <div className="bg-background-tertiary p-6 rounded-xl border border-border-DEFAULT hover:border-border-hover transition-colors">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2 rounded-lg bg-opacity-20 ${stat.color.replace('text-', 'bg-')}`}>
            <stat.icon className={`h-6 w-6 ${stat.color}`} />
          </div>
          <div className={`flex items-center space-x-1 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            <TrendIcon className="h-4 w-4" />
            <span>{Math.abs(stat.change).toFixed(1)}%</span>
          </div>
        </div>
        <div>
          <p className="text-text-muted text-sm mb-1">{stat.title}</p>
          <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={className}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Sales Overview</h2>
        <p className="text-text-secondary">Performance metrics for {currentYear.year}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      <div className="bg-background-secondary p-6 rounded-xl border border-border-DEFAULT">
        <h3 className="text-xl font-semibold text-text-primary mb-4">Year-over-Year Growth</h3>
        <div className="space-y-4">
          {data.map((yearData) => (
            <div key={yearData.year} className="flex items-center justify-between p-4 bg-background-tertiary rounded-lg">
              <div>
                <p className="font-medium text-text-primary">{yearData.year}</p>
                <p className="text-text-secondary text-sm">
                  {formatNumber(yearData.totalOrders)} orders • {formatCurrency(yearData.averageOrderValue)} AOV
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-text-primary">{formatCurrency(yearData.totalRevenue)}</p>
                {yearData.growthRate > 0 && (
                  <p className="text-green-400 text-sm flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +{yearData.growthRate.toFixed(1)}%
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};