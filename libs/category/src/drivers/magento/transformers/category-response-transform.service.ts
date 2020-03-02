import { Injectable, Inject } from '@angular/core';

import {
  DaffProductTransformer, 
  DaffProductTransformerInterface, 
  DaffProductUnion
} from '@daffodil/product';

import { DaffGetCategoryResponse } from '../../../models/get-category-response';
import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { CompleteCategoryResponse } from '../models/outputs/complete-category-response';
import { DaffMagentoCategoryTransformerService } from './category-transformer.service';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryResponseTransformService {

  constructor(
    private magentoCategoryTransformerService: DaffMagentoCategoryTransformerService,
    private magentoCategoryPageConfigurationTransformerService: DaffMagentoCategoryPageConfigTransformerService,
    @Inject(DaffProductTransformer) private magentoProductTransformerService: DaffProductTransformerInterface<DaffProductUnion>
  ) {}

  transform(completeCategory: CompleteCategoryResponse): DaffGetCategoryResponse {
    return {
      category: this.magentoCategoryTransformerService.transform(completeCategory.category),
      categoryPageConfigurationState: this.magentoCategoryPageConfigurationTransformerService.transform(completeCategory.category, completeCategory.sortsAndFilters),
      products: this.magentoProductTransformerService.transformMany(completeCategory.category.products.items)
    }
  }
}
