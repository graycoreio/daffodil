import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { MockCart } from '@daffodil/cart/testing';
import { DaffCartTotalFactory } from '@daffodil/cart/testing';
import { DaffCartShippingInformationFactory } from '@daffodil/cart/testing';
import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * Mock class for {@link DaffCartWithStoreCredit}.
 */
export class MockDaffCartWithStoreCredit extends MockCart implements DaffCartWithStoreCredit {
  appliedStoreCredit = faker.datatype.number({ min: 0, max: 1000 });
};

/**
 * Model factory for {@link DaffCartWithStoreCredit}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartWithStoreCreditFactory extends DaffModelFactory<DaffCartWithStoreCredit, typeof MockDaffCartWithStoreCredit>{
  constructor(
    totalFactory: DaffCartTotalFactory,
    shippingInformationFactory: DaffCartShippingInformationFactory,
  ) {
    super(MockDaffCartWithStoreCredit, totalFactory, shippingInformationFactory);
  }
}
