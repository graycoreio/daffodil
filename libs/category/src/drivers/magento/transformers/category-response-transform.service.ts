import { Injectable, Inject } from '@angular/core';

import { DaffMagentoProductTransformerService } from '@daffodil/product';

import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { CompleteCategoryResponse } from '../models/complete-category-response';
import { DaffGetCategoryResponse } from '../../../models/get-category-response';
import { DaffMagentoCategoryTransformerService } from './category-transformer.service';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryResponseTransformService {

  constructor(
    private magentoCategoryTransformerService: DaffMagentoCategoryTransformerService,
    private magentoCategoryPageConfigurationTransformerService: DaffMagentoCategoryPageConfigTransformerService,
    private magentoProductTransformerService: DaffMagentoProductTransformerService
  ) {}

  transform(completeCategory: CompleteCategoryResponse): DaffGetCategoryResponse {
    return {
      category: this.magentoCategoryTransformerService.transform(completeCategory.category),
      categoryPageConfigurationState: this.magentoCategoryPageConfigurationTransformerService.transform(completeCategory),
      products: this.magentoProductTransformerService.transformMany(completeCategory.products)
    }
  }
}
