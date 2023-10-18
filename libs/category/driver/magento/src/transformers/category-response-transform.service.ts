import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffGetCategoryResponse } from '@daffodil/category';
import {
  DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM,
  DaffMagentoProductTransform,
} from '@daffodil/product/driver/magento';

import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { DaffMagentoCategoryTransformerService } from './category-transformer.service';
import { MagentoCompleteCategoryResponse } from '../models/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCategoryResponseTransformService {

  constructor(
    private magentoCategoryTransformerService: DaffMagentoCategoryTransformerService,
    private magentoCategoryPageConfigurationTransformerService: DaffMagentoCategoryPageConfigTransformerService,
    @Inject(DAFF_PRODUCT_MAGENTO_PRODUCT_TRANSFORM) private magentoProductsTransform: DaffMagentoProductTransform,
  ) {}

  transform(completeCategory: MagentoCompleteCategoryResponse, mediaUrl: string): DaffGetCategoryResponse {
    return {
      ...{ magentoCompleteCategoryResponse: completeCategory },
      category: this.magentoCategoryTransformerService.transform(completeCategory.category, completeCategory.products),
      categoryPageMetadata: this.magentoCategoryPageConfigurationTransformerService.transform(completeCategory),
      products: completeCategory.products.map(product => this.magentoProductsTransform(product, mediaUrl)),
    };
  }
}
