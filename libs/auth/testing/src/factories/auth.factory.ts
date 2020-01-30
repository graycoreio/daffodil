import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffAuth } from '@daffodil/auth';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockAuth implements DaffAuth {
  token = faker.random.number(1000000).toString();
};

@Injectable({
  providedIn: 'root'
})
export class DaffAuthFactory extends DaffModelFactory<DaffAuth> {
  constructor() {
    super(MockAuth);
  }
}
