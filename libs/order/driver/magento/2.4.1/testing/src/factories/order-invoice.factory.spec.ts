import { TestBed } from '@angular/core/testing';

import { MagentoOrderInvoice } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderInvoiceFactory } from './order-invoice.factory';

describe('@daffodil/order/magento/2.4.1/testing | MagentoOrderInvoiceFactory', () => {
  let factory: MagentoOrderInvoiceFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderInvoiceFactory],
    });

    factory = TestBed.inject(MagentoOrderInvoiceFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrderInvoice;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoOrderInvoice with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.items).toBeDefined();
      expect(result.total).toBeDefined();
    });
  });
});
