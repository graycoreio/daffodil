import { Injectable } from '@angular/core';

import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationTransformerInterface } from '@daffodil/navigation/driver';

import { CategoryNode } from '../models/category-node';

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
      // TODO: optional chaining
      children: node.children && node.children.filter(child => child.include_in_menu).map(child => this.transform(child))
    };
  }
}
