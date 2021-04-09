import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { MagentoSortFields } from '@daffodil/category/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';

class MockMagentoPageInfo implements MagentoSortFields {
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
export class DaffCategoryDriverMagentoSortFieldsFactory extends DaffModelFactory<MagentoSortFields> {
  constructor(){
    super(MockMagentoPageInfo);
  }
}
