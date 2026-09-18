import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffProductCustomAttribute } from '@daffodil/product';
import { DaffProductCustomAttributeServiceInterface } from '@daffodil/product/driver';
import { DaffProductCustomAttributeFactory } from '@daffodil/product/testing';

/**
 * The product custom attribute testing driver to mock the backend custom attribute service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingProductCustomAttributeService implements DaffProductCustomAttributeServiceInterface {
  constructor(private customAttributeFactory: DaffProductCustomAttributeFactory) {}

  list(): Observable<DaffProductCustomAttribute[]> {
    return of(this.customAttributeFactory.createMany(5));
  }
}
