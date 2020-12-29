import { TestBed } from '@angular/core/testing';

import { DaffOrder } from '@daffodil/order';
import { MagentoOrder } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderTestDataFactory } from '../../helpers/public_api';
import { daffMagentoTransformOrder } from './order';

describe('Driver | Magento | Order | Transformer | Order', () => {
  let testDataFactory: MagentoOrderTestDataFactory;

  let mockDaffOrder: DaffOrder;
  let mockMagentoOrder: MagentoOrder;

  beforeEach(() => {
    testDataFactory = TestBed.inject(MagentoOrderTestDataFactory);

    const testData = testDataFactory.create();
    mockDaffOrder = testData.mockDaffOrder;
    mockMagentoOrder = testData.mockMagentoOrder;
  });

  describe('daffMagentoTransformOrder | transforming a magento order into a daff order', () => {
    let transformedOrder;

    beforeEach(() => {
      transformedOrder = daffMagentoTransformOrder(mockMagentoOrder);
    });

    it('should return an object with the correct values', () => {
      expect(transformedOrder).toEqual(jasmine.objectContaining(mockDaffOrder));
    });
  });
});
