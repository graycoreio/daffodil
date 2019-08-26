import { Injectable } from '@angular/core';
import { DaffioDoc } from '../../shared/models/doc';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as faker from 'faker/locale/en_US';

export class MockDoc implements DaffioDoc {
  id = faker.random.number(1000);
  title = faker.lorem.words();
  contents = faker.lorem.paragraph()
};

@Injectable({
  providedIn: 'root'
})
export class DaffioDocFactory extends DaffModelFactory<DaffioDoc>{
  constructor() {
    super(MockDoc);
  }
}
