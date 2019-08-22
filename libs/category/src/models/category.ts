export interface DaffCategory {
  id: string;
  name: string;
  children_count?: number;
  total_products?: number;
  children?: DaffCategory[];
}
