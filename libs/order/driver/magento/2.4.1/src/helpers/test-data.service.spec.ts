import { TestBed } from '@angular/core/testing';

import { MagentoOrderTestData } from './test-data.interface';
import { MagentoOrderTestDataFactory } from './test-data.service'

describe('Order | Driver | Magento | 2.4.1 | Helpers | MagentoOrderTestDataFactory', () => {
  let service: MagentoOrderTestDataFactory;

  beforeEach(() => {
    service = TestBed.inject(MagentoOrderTestDataFactory);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('create | creating test data', () => {
    let data: MagentoOrderTestData;

    beforeEach(() => {
      data = service.create();
    });

    it('should return a Daffodil order', () => {
      expect(data.mockDaffOrder).toBeTruthy();
    });

    it('should return a Magento order', () => {
      expect(data.mockMagentoOrder).toBeTruthy();
    });
  });
});
