export interface SalesData {
    id: string;
    month: string;
    year: number;
    revenue: number;
    orders: number;
    category: string;
    region: string;
    averageOrderValue: number;
  }
  
  export interface MonthlySales {
    month: string;
    '2022': number;
    '2023': number;
    '2024': number;
  }
  
  export interface CategorySales {
    name: string;
    value: number;
    percentage: number;
    fill: string;
  }
  
  export interface YearlySummary {
    year: number;
    totalRevenue: number;
    totalOrders: number;
    averageOrderValue: number;
    growthRate: number;
  }
  
  export interface FilterOptions {
    minSales: number;
    maxSales: number;
    selectedYear?: number;
    selectedCategory?: string;
    selectedRegion?: string;
  }
  
  export type ChartType = 'bar' | 'line' | 'pie';
  
  export interface ChartData {
    monthly: MonthlySales[];
    categories: CategorySales[];
    yearly: YearlySummary[];
  }