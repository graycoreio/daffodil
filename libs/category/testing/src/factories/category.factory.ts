import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategory } from '@daffodil/category';
import { DaffModelFactory } from "@daffodil/core/testing";

export class MockCategory implements DaffCategory {
  id = faker.random.number(10000).toString();
  name = faker.commerce.productMaterial();
}

@Injectable({
  providedIn: 'root'
})
export class DaffCategoryFactory extends DaffModelFactory<DaffCategory>{
  constructor(){
    super(MockCategory);
  }
}
