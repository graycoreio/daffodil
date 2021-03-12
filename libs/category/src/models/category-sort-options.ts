export interface DaffCategorySortOptions {
	default: DaffCategorySortOption['value'];
	options: DaffCategorySortOption[];
}

export interface DaffCategorySortOption {
  label: string;
  value: any;
}
