import { Injectable, Inject } from '@angular/core';

import {
  DaffProductTransformer, 
  DaffProductTransformerInterface, 
  DaffProductUnion
} from '@daffodil/product';

import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { CompleteCategoryResponse } from '../models/inputs/complete-category-response';
import { DaffGetCategoryResponse } from '../../../models/inputs/get-category-response';
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
      categoryPageConfigurationState: this.magentoCategoryPageConfigurationTransformerService.transform(
				completeCategory.category.id,
				completeCategory.aggregates,
				completeCategory.page_info,
				completeCategory.sort_fields,
				completeCategory.total_count,
				completeCategory.products
			),
      products: this.magentoProductTransformerService.transformMany(completeCategory.products)
    }
  }
}
