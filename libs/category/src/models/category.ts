import { DaffCategoryBreadcrumb } from './category-breadcrumb';

export interface DaffCategory {
  id: string;
  name: string;
  children_count?: number;
  total_products?: number;
  children?: DaffCategory[];
  productIds?: string[];
  breadcrumbs?: DaffCategoryBreadcrumb[];
}

// we need a retain and reload action because of this.

// changing filters, sort_mode, page_size, or sort_direction resets the current_page to 1.
