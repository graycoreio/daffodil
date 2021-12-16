import { Injectable } from '@angular/core';

import {
  DaffCategory,
  DaffCategoryBreadcrumb,
} from '@daffodil/category';
import { MagentoProduct } from '@daffodil/product/driver/magento';

import {
  MagentoBreadcrumb,
  MagentoCategory,
} from '../models/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCategoryTransformerService {

  transform(category: MagentoCategory, products: MagentoProduct[]): DaffCategory {
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
      product_ids: products.map(product => product.sku),
      total_products: products.length,
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
