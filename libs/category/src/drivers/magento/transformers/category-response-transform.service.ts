import { Injectable } from '@angular/core';

import { DaffMagentoProductTransformerService, DaffProduct } from '@daffodil/product';

import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { MagentoCompleteCategoryResponse } from '../models/complete-category-response';
import { DaffGetCategoryResponse } from '../../../models/get-category-response';
import { DaffMagentoCategoryTransformerService } from './category-transformer.service';
import { DaffCategory } from '../../../models/category';
import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';
import { DaffCategoryRequest } from '../../../models/requests/category-request';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryResponseTransformService {

  constructor(
    private magentoCategoryTransformerService: DaffMagentoCategoryTransformerService,
    private magentoCategoryPageConfigurationTransformerService: DaffMagentoCategoryPageConfigTransformerService,
    private magentoProductTransformerService: DaffMagentoProductTransformerService
  ) {}

  transform(completeCategory: MagentoCompleteCategoryResponse): DaffGetCategoryResponse<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct> {
    return {
			...{ magentoCompleteCategoryResponse: completeCategory },
      category: this.magentoCategoryTransformerService.transform(completeCategory.category),
      categoryPageConfigurationState: this.magentoCategoryPageConfigurationTransformerService.transform(completeCategory),
      products: this.magentoProductTransformerService.transformMany(completeCategory.products)
    }
  }
}
