import { Injectable } from '@angular/core';

import { DaffCategory } from '../../../models/category';
import { DaffCategoryBreadcrumb } from '../../../models/category-breadcrumb';
import { MagentoBreadcrumb, MagentoCategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryTransformerService {

  transform(category: MagentoCategory): DaffCategory {
    return {
      id: category.id,
      name: category.name,
      children_count: category.children_count,
			breadcrumbs: category.breadcrumbs ? category.breadcrumbs.map(breadcrumb => this.transformBreadcrumb(breadcrumb)) : null,
			product_ids: category.products.items.map(product => product.sku),
			total_products: category.products.items.length
    }
  }

  private transformBreadcrumb(breadcrumb: MagentoBreadcrumb): DaffCategoryBreadcrumb {
    return {
      categoryId: breadcrumb.category_id,
      categoryName: breadcrumb.category_name,
      categoryLevel: breadcrumb.category_level,
      categoryUrlKey: breadcrumb.category_url_key
    }
  }
}
