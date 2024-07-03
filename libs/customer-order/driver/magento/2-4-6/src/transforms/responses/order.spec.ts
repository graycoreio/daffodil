import { TestBed } from '@angular/core/testing';

import { MagentoCustomerOrder } from '@daffodil/customer-order/driver/magento/2-4-6';
import { MagentoCustomerOrderFactory } from '@daffodil/customer-order/driver/magento/2-4-6/testing';
import { DaffOrder } from '@daffodil/order';

import { daffMagentoCustomerOrderTransformOrder } from './order';

describe('@daffodil/customer-order/driver/magento/2-4-6 | daffMagentoCustomerOrderTransformOrder', () => {
  let orderFactory: MagentoCustomerOrderFactory;

  let mockMagentoOrder: MagentoCustomerOrder;

  beforeEach(() => {
    orderFactory = TestBed.inject(MagentoCustomerOrderFactory);

    mockMagentoOrder = orderFactory.create();
  });

  describe('daffMagentoCustomerOrderTransformOrder | transforming a magento order into a daff order', () => {
    let transformedOrder: DaffOrder;

    beforeEach(() => {
      transformedOrder = daffMagentoCustomerOrderTransformOrder(mockMagentoOrder, 'email');
    });

    it('should return an object with the correct values', () => {
      expect(transformedOrder.id).toEqual(mockMagentoOrder.number);
    });
  });
});
