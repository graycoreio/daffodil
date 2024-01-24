import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoProductSortFields } from '@daffodil/product/driver/magento';

class MockMagentoProductSortFields implements MagentoProductSortFields {
  __typename = <const>'SortFields';
  default = 'position';
  options = [
    {
      label: 'string',
      value: 'position',
    },
  ];
}

@Injectable({
  providedIn: 'root',
})
export class MagentoProductSortFieldsFactory extends DaffModelFactory<MagentoProductSortFields> {
  constructor(){
    super(MockMagentoProductSortFields);
  }
}
