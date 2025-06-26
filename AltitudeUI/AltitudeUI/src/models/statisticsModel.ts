export interface CategoryStatistic {
  name: string;
  count: number;
  percentage: number;
}

export interface PriceDistribution {
  priceRange: string;
  count: number;
}

export interface StatisticsResponse {
  activeUsers: number;
  totalProducts: number;
  categoriesData: CategoryStatistic[];
  priceDistribution: PriceDistribution[];
} 