import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffProductModification } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * Mocked DaffProductModification object.
 */
export class MockProductModification implements DaffProductModification {
  id = faker.random.number(10000).toString();
  modification = {
    'customProperty': 'customProperty'
  }
}

/**
 * Factory for creating DaffProductModifications.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffProductModificationFactory extends DaffModelFactory<DaffProductModification>{
  constructor(){
    super(MockProductModification);
  }
}