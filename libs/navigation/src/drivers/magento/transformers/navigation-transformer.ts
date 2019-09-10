import { Injectable } from '@angular/core';

import { CategoryNode } from "../interfaces/category-node";
import { DaffNavigationTransformerInterface } from "../../interfaces/navigation-transformer.interface";
import { DaffNavigationTreeUnion } from '../../../models/navigation-tree-union';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoNavigationTransformerService implements DaffNavigationTransformerInterface<DaffNavigationTreeUnion> {

  transform(node: CategoryNode): DaffNavigationTreeUnion {
    return {
      id: node.id,
      name: node.name,
      total_products: node.products.total_count,
      children_count: node.children_count,
      children: node.children.map((child) => {
        return this.transform(child);
      })
    };
  }
}
