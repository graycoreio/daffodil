import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  DaffNavigationBreadcrumb,
  DaffNavigationTree,
} from '@daffodil/navigation';
import { DaffNavigationTransformerInterface } from '@daffodil/navigation/driver';

import {
  CategoryNode,
  MagentoBreadcrumb,
} from '../models/category-node';
import {
  MagentoNavigationTreeTransform,
  MAGENTO_NAVIGATION_TREE_TRANSFORMS,
} from '../transforms/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoNavigationTransformerService implements DaffNavigationTransformerInterface<DaffNavigationTree> {
  constructor(
    @Inject(MAGENTO_NAVIGATION_TREE_TRANSFORMS) private extraTransforms: Array<MagentoNavigationTreeTransform>,
  ) {}

  transform(node: CategoryNode): DaffNavigationTree {
    const id = node.uid;
    return this.extraTransforms.reduce(
      (daffTree, transform) => transform(daffTree, node),
      {
        id,
        url: `/${node.url_path}${node.url_suffix}`,
        name: node.name,
        total_products: node.product_count,
        children_count: node.children_count,
        breadcrumbs: node.breadcrumbs
          ?.map(breadcrumb => this.transformBreadcrumb(breadcrumb, node))
          .sort((a, b) => a.level - b.level) ||
        [],
        children: node.children?.filter(child => child.include_in_menu)
          .sort((a, b) => a.position - b.position)
          .map(child => this.transform(child)) || [],
      },
    );
  }

  private transformBreadcrumb(breadcrumb: MagentoBreadcrumb, category: CategoryNode): DaffNavigationBreadcrumb {
    return {
      id: breadcrumb.category_uid,
      name: breadcrumb.category_name,
      level: breadcrumb.category_level,
      url: `/${breadcrumb.category_url_path}${category.url_suffix}`,
    };
  }
}
