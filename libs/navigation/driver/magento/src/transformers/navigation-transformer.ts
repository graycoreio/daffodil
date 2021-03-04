import { Injectable } from '@angular/core';

import {
  DaffNavigationBreadcrumb,
  DaffNavigationTree,
} from '@daffodil/navigation';
import { DaffNavigationTransformerInterface } from '@daffodil/navigation/driver';

import {
  CategoryNode,
  MagentoBreadcrumb,
} from '../models/category-node';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoNavigationTransformerService implements DaffNavigationTransformerInterface<DaffNavigationTree> {

  transform(node: CategoryNode): DaffNavigationTree {
    const id = String(node.id);
    return {
      id,
      path: id,
      name: node.name,
      total_products: node.product_count,
      children_count: node.children_count,
      breadcrumbs: node.breadcrumbs
        ?.map(breadcrumb => this.transformBreadcrumb(breadcrumb))
        .sort((a, b) => a.categoryLevel - b.categoryLevel) ||
      [],
      children: node.children?.filter(child => child.include_in_menu)
        .sort((a, b) => a.position - b.position)
        .map(child => this.transform(child)) || [],
    };
  }

  private transformBreadcrumb(breadcrumb: MagentoBreadcrumb): DaffNavigationBreadcrumb {
    return {
      categoryId: String(breadcrumb.category_id),
      categoryName: breadcrumb.category_name,
      categoryLevel: breadcrumb.category_level,
      categoryUrlKey: breadcrumb.category_url_key,
    };
  }
}
