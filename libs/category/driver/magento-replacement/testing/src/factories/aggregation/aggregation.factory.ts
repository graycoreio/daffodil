import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoAggregation } from '@daffodil/category/driver/magento-replacement';
import { DaffModelFactory } from '@daffodil/core/testing';

import { DaffCategoryDriverMagentoAggregationPriceFactory } from './type/price.factory';
import { DaffCategoryDriverMagentoAggregationSelectFactory } from './type/select.factory';

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryDriverMagentoAggregationFactory extends DaffModelFactory<MagentoAggregation> {
  constructor(private selectFactory: DaffCategoryDriverMagentoAggregationSelectFactory, private priceFactory: DaffCategoryDriverMagentoAggregationPriceFactory){
    super(faker.random.number({ min: 1, max: 2 }) === 2 ? selectFactory.type : priceFactory.type);
  }
}
