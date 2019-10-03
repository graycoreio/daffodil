import { Injectable } from '@angular/core';

import { DaffCategory } from '../../../models/category';
import { DaffCategoryBreadcrumb } from '../../../models/category-breadcrumb';
import { CategoryNode } from '../models/outputs/category-node';
import { DaffCategoryTransformerInterface } from '../../interfaces/category-transform.interface';
import { BreadcrumbNode } from '../models/outputs/breadcrumb-node';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryTransformerService implements DaffCategoryTransformerInterface<DaffCategory> {

  transform(categoryNode: CategoryNode): DaffCategory {
    return {
      id: categoryNode.id,
      name: categoryNode.name,
      total_products: categoryNode.products.total_count,
      children_count: categoryNode.children_count,
      productIds: categoryNode.products.items.map(product => product.id.toString()),
      breadcrumbs: categoryNode.breadcrumbs ? categoryNode.breadcrumbs.map(breadcrumb => this.transformBreadcrumb(breadcrumb)) : null
    }
  }

  private transformBreadcrumb(breadcrumb: BreadcrumbNode): DaffCategoryBreadcrumb {
    return {
      categoryId: breadcrumb.category_id,
      categoryName: breadcrumb.category_name,
      categoryLevel: breadcrumb.category_level,
      categoryUrlKey: breadcrumb.category_url_key
    }
  }
}
