import { Injectable } from '@angular/core';

import { DaffCategoryPageMetadata } from '@daffodil/category';
import { magentoProductCollectionMetadataTransform } from '@daffodil/product/driver/magento';

import { MagentoCompleteCategoryResponse } from '../models/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCategoryPageConfigTransformerService {

  transform(categoryResponse: MagentoCompleteCategoryResponse): DaffCategoryPageMetadata {
    const aggregatesWithoutCategories = categoryResponse.aggregates.filter(aggregate => aggregate.attribute_code !== 'category_id');

    return {
      ...magentoProductCollectionMetadataTransform(
        aggregatesWithoutCategories,
        categoryResponse.page_info,
        categoryResponse.sort_fields,
        categoryResponse.products,
        categoryResponse.total_count,
        categoryResponse.appliedSortOption,
        categoryResponse.appliedSortDirection,
      ),
      id: categoryResponse.category.uid,
    };
  }
}
