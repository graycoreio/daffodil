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
      ...magentoProductCollectionMetadataTransform(aggregatesWithoutCategories, categoryResponse.page_info, categoryResponse.sort_fields),
      id: categoryResponse.category.uid,
      total_products: categoryResponse.total_count,
      product_ids: categoryResponse.products.map(product => product.sku),
    };
  }
}
