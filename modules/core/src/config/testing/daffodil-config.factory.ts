import { Injectable } from '@angular/core';
import { Product } from '@daffodil/product/model/product';
import { DaffodilConfig } from '@daffodil/config/model';

@Injectable()
export class DaffodilConfigFactory {
  
  create() : DaffodilConfig {
    return new DaffodilConfigMock();
  }
}

export class DaffodilConfigMock implements DaffodilConfig {
  BASE_URL = 'baseUrl';
};
