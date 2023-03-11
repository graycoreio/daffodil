import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffIdentifiable } from '@daffodil/core';

import { DaffModelFactory } from './factory';

export class MockDaffIdentifiable implements DaffIdentifiable {
  id = faker.datatype.uuid();
}

@Injectable({
  providedIn: 'root',
})
export class DaffIdentifiableFactory extends DaffModelFactory<DaffIdentifiable>{
  constructor(){
    super(MockDaffIdentifiable);
  }
}
