import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoAggregation } from '@daffodil/category/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryDriverMagentoAggregationPriceFactory } from './type/price.factory';

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryDriverMagentoAggregationFactory extends DaffModelFactory<MagentoAggregation> {
  constructor(
    private priceFactory: DaffCategoryDriverMagentoAggregationPriceFactory,
  ){
    super(priceFactory.type);
  }
}
