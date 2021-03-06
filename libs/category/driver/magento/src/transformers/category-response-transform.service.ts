import { Injectable } from '@angular/core';

import { DaffGetCategoryResponse } from '@daffodil/category';
import { transformManyMagentoProducts } from '@daffodil/product/driver/magento';

import { MagentoCompleteCategoryResponse } from '../models/public_api';
import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { DaffMagentoCategoryTransformerService } from './category-transformer.service';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCategoryResponseTransformService {

  constructor(
    private magentoCategoryTransformerService: DaffMagentoCategoryTransformerService,
    private magentoCategoryPageConfigurationTransformerService: DaffMagentoCategoryPageConfigTransformerService,
  ) {}

  transform(completeCategory: MagentoCompleteCategoryResponse): DaffGetCategoryResponse {
    return {
      ...{ magentoCompleteCategoryResponse: completeCategory },
      category: this.magentoCategoryTransformerService.transform(completeCategory.category),
      categoryPageConfigurationState: this.magentoCategoryPageConfigurationTransformerService.transform(completeCategory),
      products: transformManyMagentoProducts(completeCategory.products),
    };
  }
}
