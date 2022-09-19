import { Injectable } from '@angular/core';

import { DaffCategory } from '@daffodil/category';
import { DaffFilterRequest } from '@daffodil/core';
import {
  MagentoProductFilterActionEnum,
  MagentoProductFilters,
  MagentoProductAppliedFiltersTransformService,
} from '@daffodil/product/driver/magento';


@Injectable({
  providedIn: 'root',
})
export class DaffMagentoAppliedFiltersTransformService {
  constructor(
    private productFilterRequestsTransformer: MagentoProductAppliedFiltersTransformService,
  ) {}

  transform(categoryId: DaffCategory['id'], daffFilters: DaffFilterRequest[]): MagentoProductFilters {
    const magentoFilters: MagentoProductFilters = {
      category_uid: {
        [MagentoProductFilterActionEnum.Equal]: categoryId,
      },
    };

    if(!daffFilters) {
      return magentoFilters;
    }

    return {
      ...magentoFilters,
      ...this.productFilterRequestsTransformer.transform(daffFilters),
    };
  }
}
