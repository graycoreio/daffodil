import { Injectable } from '@angular/core';

import { DaffNavigationBreadcrumb, DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationTransformerInterface } from '@daffodil/navigation/driver';

import { CategoryNode, MagentoBreadcrumb } from '../models/category-node';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoNavigationTransformerService implements DaffNavigationTransformerInterface<DaffNavigationTree> {

  transform(node: CategoryNode): DaffNavigationTree {
    return {
      id: node.id,
      path: node.id,
      name: node.name,
      total_products: node.products.total_count,
			children_count: node.children_count,
			//todo: use optional chaining when possible
			breadcrumbs: node.breadcrumbs ? 
				node.breadcrumbs
					.map(breadcrumb => this.transformBreadcrumb(breadcrumb))
					.sort((a, b) => a.categoryLevel - b.categoryLevel) : 
				[],
      // TODO: optional chaining
      children: node.children && node.children.filter(child => child.include_in_menu).map(child => this.transform(child))
    };
  }

  private transformBreadcrumb(breadcrumb: MagentoBreadcrumb): DaffNavigationBreadcrumb {
    return {
      categoryId: breadcrumb.category_id,
      categoryName: breadcrumb.category_name,
      categoryLevel: breadcrumb.category_level,
      categoryUrlKey: breadcrumb.category_url_key
    }
  }
}
