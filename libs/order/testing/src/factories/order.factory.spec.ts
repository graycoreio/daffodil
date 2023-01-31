import { TestBed } from '@angular/core/testing';

import { DaffOrder } from '@daffodil/order';

import { DaffOrderFactory } from './order.factory';

describe('@daffodil/order/testing | DaffOrderFactory', () => {

  let orderFactory: DaffOrderFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderFactory],
    });

    orderFactory = TestBed.inject(DaffOrderFactory);
  });

  it('should be created', () => {
    expect(orderFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffOrder;

    beforeEach(() => {
      result = orderFactory.create();
    });

    it('should return a Order', () => {
      expect(result).toBeDefined();
    });

    it('should have items', () => {
      expect(result.items.length).toBeGreaterThanOrEqual(1);
    });

    it('should have totals', () => {
      expect(result.totals.length).toBeGreaterThanOrEqual(1);
    });

    it('should have coupons', () => {
      expect(result.applied_codes.length).toBeGreaterThanOrEqual(1);
    });

    it('should have billing addresses', () => {
      expect(result.billing_addresses.length).toBeGreaterThanOrEqual(1);
    });

    it('should have shipping addresses', () => {
      expect(result.shipping_addresses.length).toBeGreaterThanOrEqual(1);
    });

    it('should have a DaffOrderPayment', () => {
      expect(result.payment).toBeTruthy();
    });

    it('should have invoices', () => {
      expect(result.invoices.length).toBeGreaterThanOrEqual(1);
    });

    it('should have credits', () => {
      expect(result.credits.length).toBeGreaterThanOrEqual(1);
    });

    it('should have shipments', () => {
      expect(result.shipments.length).toBeGreaterThanOrEqual(1);
    });
  });
});
