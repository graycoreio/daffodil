import { TestBed } from '@angular/core/testing';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { MagentoCartWithStoreCredit } from '@daffodil/cart-store-credit/driver/magento';
import { MagentoCartWithStoreCreditFactory } from '@daffodil/cart-store-credit/driver/magento/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { magentoCartWithStoreCreditTransform } from './cart-with-store-credit';

describe('@daffodil/cart-store-credit/driver/magento | magentoCartWithStoreCreditTransform', () => {
  let storeCreditFactory: MagentoCartWithStoreCreditFactory;
  let mockStoreCredit: MagentoCartWithStoreCredit;
  let cartFactory: DaffCartFactory;
  let result: DaffCartWithStoreCredit;

  beforeEach(() => {
    storeCreditFactory = TestBed.inject(MagentoCartWithStoreCreditFactory);
    cartFactory = TestBed.inject(DaffCartFactory);
  });

  it('should transform', () => {
    const credit = storeCreditFactory.create();
    expect(
      magentoCartWithStoreCreditTransform(cartFactory.create(), credit).appliedStoreCredit,
    ).toEqual(credit.applied_store_credit.applied_balance.value);
  });

  it('should transform 0 safely', () => {
    const magentoCart = storeCreditFactory.create();
    magentoCart.applied_store_credit.applied_balance.value = 0;
    expect(
      magentoCartWithStoreCreditTransform(cartFactory.create(), magentoCart).appliedStoreCredit,
    ).toEqual(0);
  });

  it('should transform to null if the cart does not have store credit (guest checkout)', () => {
    const magentoCart = storeCreditFactory.create();
    magentoCart.applied_store_credit = null;
    expect(
      magentoCartWithStoreCreditTransform(cartFactory.create(), magentoCart).appliedStoreCredit,
    ).toEqual(0);
  });
});
