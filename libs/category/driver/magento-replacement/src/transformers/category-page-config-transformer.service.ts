import { Injectable } from '@angular/core';

import {
  DaffCategoryPageMetadata,
  daffCategoryFilterArrayToDict,
} from '@daffodil/category';

import { MagentoCompleteCategoryResponse } from '../models/public_api';
import { transformAggregate } from './pure/aggregate/transform';
import { coerceDefaultSortOptionFirst } from './pure/sort-default-option-first';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCategoryPageConfigTransformerService {

  transform(categoryResponse: MagentoCompleteCategoryResponse): DaffCategoryPageMetadata {
    return {
      id: String(categoryResponse.category.id),
      page_size: categoryResponse.page_info.page_size,
      current_page: categoryResponse.page_info.current_page,
      total_pages: categoryResponse.page_info.total_pages,
      total_products: categoryResponse.total_count,
      filters: daffCategoryFilterArrayToDict(categoryResponse.aggregates.map(transformAggregate)),
      sort_options: {
        default: categoryResponse.sort_fields.default,
        options: coerceDefaultSortOptionFirst(categoryResponse.sort_fields).options,
      },
      product_ids: categoryResponse.products.map(product => product.sku),
      // TODO: implement?
      applied_sort_direction: null,
      applied_sort_option: null,
    };
  }
}
