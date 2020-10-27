import { TestBed } from '@angular/core/testing';

import { DaffOrder } from '@daffodil/order';

import { MagentoOrderTestDataFactory } from '../../helpers/test-data.service';
import { MagentoOrder } from '../../models/responses/public_api';
import { daffMagentoTransformOrder } from './order';

describe('Driver | Magento | Order | Transformer | Order', () => {
  let testDataFactory: MagentoOrderTestDataFactory;

  let mockDaffOrder: DaffOrder;
  let mockMagentoOrder: MagentoOrder;

  beforeEach(() => {
    testDataFactory = TestBed.get(MagentoOrderTestDataFactory);

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
