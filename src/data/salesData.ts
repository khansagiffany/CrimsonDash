import { SalesData, MonthlySales, CategorySales, YearlySummary, ChartData } from '@/types/sales';

// Mock sales data inspired by typical e-commerce datasets
export const rawSalesData: SalesData[] = [
  // 2022 Data
  { id: '1', month: 'Jan', year: 2022, revenue: 45000, orders: 180, category: 'Electronics', region: 'North America', averageOrderValue: 250 },
  { id: '2', month: 'Feb', year: 2022, revenue: 52000, orders: 208, category: 'Electronics', region: 'North America', averageOrderValue: 250 },
  { id: '3', month: 'Mar', year: 2022, revenue: 48000, orders: 192, category: 'Electronics', region: 'North America', averageOrderValue: 250 },
  { id: '4', month: 'Apr', year: 2022, revenue: 55000, orders: 220, category: 'Electronics', region: 'North America', averageOrderValue: 250 },
  { id: '5', month: 'May', year: 2022, revenue: 58000, orders: 232, category: 'Electronics', region: 'North America', averageOrderValue: 250 },
  { id: '6', month: 'Jun', year: 2022, revenue: 62000, orders: 248, category: 'Electronics', region: 'North America', averageOrderValue: 250 },
  { id: '7', month: 'Jul', year: 2022, revenue: 59000, orders: 236, category: 'Electronics', region: 'North America', averageOrderValue: 250 },
  { id: '8', month: 'Aug', year: 2022, revenue: 61000, orders: 244, category: 'Electronics', region: 'North America', averageOrderValue: 250 },
  { id: '9', month: 'Sep', year: 2022, revenue: 57000, orders: 228, category: 'Electronics', region: 'North America', averageOrderValue: 250 },
  { id: '10', month: 'Oct', year: 2022, revenue: 64000, orders: 256, category: 'Electronics', region: 'North America', averageOrderValue: 250 },
  { id: '11', month: 'Nov', year: 2022, revenue: 68000, orders: 272, category: 'Electronics', region: 'North America', averageOrderValue: 250 },
  { id: '12', month: 'Dec', year: 2022, revenue: 72000, orders: 288, category: 'Electronics', region: 'North America', averageOrderValue: 250 },

  // 2023 Data
  { id: '13', month: 'Jan', year: 2023, revenue: 58000, orders: 220, category: 'Electronics', region: 'North America', averageOrderValue: 264 },
  { id: '14', month: 'Feb', year: 2023, revenue: 65000, orders: 245, category: 'Electronics', region: 'North America', averageOrderValue: 265 },
  { id: '15', month: 'Mar', year: 2023, revenue: 62000, orders: 234, category: 'Electronics', region: 'North America', averageOrderValue: 265 },
  { id: '16', month: 'Apr', year: 2023, revenue: 70000, orders: 264, category: 'Electronics', region: 'North America', averageOrderValue: 265 },
  { id: '17', month: 'May', year: 2023, revenue: 74000, orders: 279, category: 'Electronics', region: 'North America', averageOrderValue: 265 },
  { id: '18', month: 'Jun', year: 2023, revenue: 78000, orders: 294, category: 'Electronics', region: 'North America', averageOrderValue: 265 },
  { id: '19', month: 'Jul', year: 2023, revenue: 76000, orders: 287, category: 'Electronics', region: 'North America', averageOrderValue: 265 },
  { id: '20', month: 'Aug', year: 2023, revenue: 79000, orders: 298, category: 'Electronics', region: 'North America', averageOrderValue: 265 },
  { id: '21', month: 'Sep', year: 2023, revenue: 75000, orders: 283, category: 'Electronics', region: 'North America', averageOrderValue: 265 },
  { id: '22', month: 'Oct', year: 2023, revenue: 82000, orders: 309, category: 'Electronics', region: 'North America', averageOrderValue: 265 },
  { id: '23', month: 'Nov', year: 2023, revenue: 86000, orders: 324, category: 'Electronics', region: 'North America', averageOrderValue: 265 },
  { id: '24', month: 'Dec', year: 2023, revenue: 92000, orders: 347, category: 'Electronics', region: 'North America', averageOrderValue: 265 },

  // 2024 Data
  { id: '25', month: 'Jan', year: 2024, revenue: 72000, orders: 260, category: 'Electronics', region: 'North America', averageOrderValue: 277 },
  { id: '26', month: 'Feb', year: 2024, revenue: 80000, orders: 289, category: 'Electronics', region: 'North America', averageOrderValue: 277 },
  { id: '27', month: 'Mar', year: 2024, revenue: 78000, orders: 282, category: 'Electronics', region: 'North America', averageOrderValue: 277 },
  { id: '28', month: 'Apr', year: 2024, revenue: 85000, orders: 307, category: 'Electronics', region: 'North America', averageOrderValue: 277 },
  { id: '29', month: 'May', year: 2024, revenue: 89000, orders: 321, category: 'Electronics', region: 'North America', averageOrderValue: 277 },
  { id: '30', month: 'Jun', year: 2024, revenue: 94000, orders: 339, category: 'Electronics', region: 'North America', averageOrderValue: 277 },
  { id: '31', month: 'Jul', year: 2024, revenue: 92000, orders: 332, category: 'Electronics', region: 'North America', averageOrderValue: 277 },
  { id: '32', month: 'Aug', year: 2024, revenue: 96000, orders: 347, category: 'Electronics', region: 'North America', averageOrderValue: 277 },
  { id: '33', month: 'Sep', year: 2024, revenue: 91000, orders: 328, category: 'Electronics', region: 'North America', averageOrderValue: 277 },
  { id: '34', month: 'Oct', year: 2024, revenue: 99000, orders: 357, category: 'Electronics', region: 'North America', averageOrderValue: 277 },
  { id: '35', month: 'Nov', year: 2024, revenue: 105000, orders: 379, category: 'Electronics', region: 'North America', averageOrderValue: 277 },
  { id: '36', month: 'Dec', year: 2024, revenue: 112000, orders: 404, category: 'Electronics', region: 'North America', averageOrderValue: 277 },
];

// Process monthly data for charts
export const monthlySalesData: MonthlySales[] = [
  { month: 'Jan', '2022': 45000, '2023': 58000, '2024': 72000 },
  { month: 'Feb', '2022': 52000, '2023': 65000, '2024': 80000 },
  { month: 'Mar', '2022': 48000, '2023': 62000, '2024': 78000 },
  { month: 'Apr', '2022': 55000, '2023': 70000, '2024': 85000 },
  { month: 'May', '2022': 58000, '2023': 74000, '2024': 89000 },
  { month: 'Jun', '2022': 62000, '2023': 78000, '2024': 94000 },
  { month: 'Jul', '2022': 59000, '2023': 76000, '2024': 92000 },
  { month: 'Aug', '2022': 61000, '2023': 79000, '2024': 96000 },
  { month: 'Sep', '2022': 57000, '2023': 75000, '2024': 91000 },
  { month: 'Oct', '2022': 64000, '2023': 82000, '2024': 99000 },
  { month: 'Nov', '2022': 68000, '2023': 86000, '2024': 105000 },
  { month: 'Dec', '2022': 72000, '2023': 92000, '2024': 112000 },
];

// Category distribution data
export const categorySalesData: CategorySales[] = [
  { name: 'Electronics', value: 2950000, percentage: 45, fill: '#820000' },
  { name: 'Clothing', value: 1770000, percentage: 27, fill: '#dc2626' },
  { name: 'Books', value: 654000, percentage: 10, fill: '#ef4444' },
  { name: 'Home & Garden', value: 785000, percentage: 12, fill: '#f87171' },
  { name: 'Sports', value: 392000, percentage: 6, fill: '#fca5a5' },
];

// Yearly summary data
export const yearlySummaryData: YearlySummary[] = [
  {
    year: 2022,
    totalRevenue: 701000,
    totalOrders: 2804,
    averageOrderValue: 250,
    growthRate: 0,
  },
  {
    year: 2023,
    totalRevenue: 897000,
    totalOrders: 3384,
    averageOrderValue: 265,
    growthRate: 28.0,
  },
  {
    year: 2024,
    totalRevenue: 1093000,
    totalOrders: 3945,
    averageOrderValue: 277,
    growthRate: 21.9,
  },
];

// Combined chart data export
export const chartData: ChartData = {
  monthly: monthlySalesData,
  categories: categorySalesData,
  yearly: yearlySummaryData,
};

// Utility functions for data processing
export const getFilteredData = (data: SalesData[], minSales: number = 0, maxSales: number = Infinity) => {
  return data.filter(item => item.revenue >= minSales && item.revenue <= maxSales);
};

export const getSalesByYear = (data: SalesData[], year: number) => {
  return data.filter(item => item.year === year);
};

export const getTotalRevenue = (data: SalesData[]) => {
  return data.reduce((total, item) => total + item.revenue, 0);
};

export const getAverageOrderValue = (data: SalesData[]) => {
  const total = data.reduce((sum, item) => sum + item.averageOrderValue, 0);
  return data.length > 0 ? total / data.length : 0;
};