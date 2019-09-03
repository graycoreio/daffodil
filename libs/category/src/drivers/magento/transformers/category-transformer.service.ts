import { Injectable } from '@angular/core';

import { DaffCategory } from '../../../models/category';
import { CategoryNode } from '../models/category-node';
import { DaffCategoryTransformerInterface } from '../../interfaces/category-transform.interface';

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
      children: categoryNode.children.map((child) => {
        return this.transform(child)
      }),
      productIds: categoryNode.products.items.map(product => product.id.toString())
    }
  }
}
