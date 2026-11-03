import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  DaffCategory,
  DaffCategoryBreadcrumb,
} from '@daffodil/category';
import { MagentoProduct } from '@daffodil/product/driver/magento';

import {
  MagentoBreadcrumb,
  MagentoCategory,
} from '../models/public_api';
import {
  MAGENTO_CATEGORY_EXTRA_TRANSFORMS,
  MagentoCategoryTreeTransform,
} from '../transforms/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCategoryTransformerService {
  constructor(
    @Inject(MAGENTO_CATEGORY_EXTRA_TRANSFORMS) private extraTransforms: Array<MagentoCategoryTreeTransform>,
  ) {}

  transform(category: MagentoCategory, products: MagentoProduct[]): DaffCategory {
    return this.extraTransforms.reduce<DaffCategory>((acc, transform) => transform(acc, category, products), {
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
    });
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
