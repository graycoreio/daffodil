import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoAggregation } from '@daffodil/product/driver/magento';

import { MagentoProductAggregationPriceFactory } from './type/price.factory';
import { MagentoProductAggregationSelectFactory } from './type/select.factory';

@Injectable({
  providedIn: 'root',
})
export class MagentoProductAggregationFactory extends DaffModelFactory<MagentoAggregation> {
  constructor(private selectFactory: MagentoProductAggregationSelectFactory, private priceFactory: MagentoProductAggregationPriceFactory){
    super(faker.datatype.number({ min: 1, max: 2 }) === 2 ? selectFactory.type : priceFactory.type);
  }
}
