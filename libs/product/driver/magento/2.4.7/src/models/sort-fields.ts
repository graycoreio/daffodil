export interface MagentoProductSortFields {
  __typename?: 'SortFields';
  default: string;
  options: MagentoSortOption[];
}

export interface MagentoSortOption {
  label: string;
  value: string;
}
