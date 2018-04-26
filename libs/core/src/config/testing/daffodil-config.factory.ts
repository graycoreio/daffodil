import { Injectable } from '@angular/core';
import { DaffodilConfig } from '../../config/model';

@Injectable()
export class DaffodilConfigFactory {
  
  create() : DaffodilConfig {
    return new DaffodilConfigMock();
  }
}

export class DaffodilConfigMock implements DaffodilConfig {
  BASE_URL = 'baseUrl';
};
