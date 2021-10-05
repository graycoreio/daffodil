import { Injectable } from '@angular/core';

import {
  DaffCategory,
  DaffCategoryBreadcrumb,
} from '@daffodil/category';

import {
  MagentoBreadcrumb,
  MagentoCategory,
} from '../models/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCategoryTransformerService {

  transform(category: MagentoCategory): DaffCategory {
    return {
      id: category.uid,
      url: `/${category.url_path}${category.url_suffix}`,
      canonicalUrl: category.canonical_url,
      name: category.name,
      description: category.description,
      meta_title: category.meta_title,
      meta_description: category.meta_description,
      children_count: category.children_count,
      breadcrumbs: category.breadcrumbs
        ?.map(breadcrumb => this.transformBreadcrumb(breadcrumb, category))
        .sort((a, b) => a.level - b.level) || null,
      product_ids: category.products.items.map(product => product.sku),
      total_products: category.products.items.length,
    };
  }

  private transformBreadcrumb(breadcrumb: MagentoBreadcrumb, category: MagentoCategory): DaffCategoryBreadcrumb {
    return {
      id: breadcrumb.category_uid,
      name: breadcrumb.category_name,
      level: breadcrumb.category_level,
      url: `/${breadcrumb.category_url_path}${category.url_suffix}`,
    };
  }
}
