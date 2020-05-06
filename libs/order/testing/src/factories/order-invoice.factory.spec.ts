import { TestBed } from '@angular/core/testing';

import { DaffOrderInvoice } from '@daffodil/order';

import { DaffOrderInvoiceFactory } from './order-invoice.factory';

describe('Order | Testing | Factories | DaffOrderInvoiceFactory', () => {
  let factory: DaffOrderInvoiceFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderInvoiceFactory]
    });

    factory = TestBed.get(DaffOrderInvoiceFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffOrderInvoice;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a DaffOrderInvoice with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.items).toBeDefined();
      expect(result.totals).toBeDefined();
      expect(result.billing_address).toBeDefined();
      expect(result.shipping_address).toBeDefined();
      expect(result.payment).toBeDefined();
      expect(result.shipping_method).toBeDefined();
    });
  });
});
