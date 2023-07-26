import { TestBed } from '@angular/core/testing';

import { MagentoTokenBaseCard } from '@daffodil/customer-payment-authorizenet/driver/magento';

import { MagentoTokenBaseCardFactory } from './token-base-card.factory';

describe('@daffodil/customer-payment-authorizenet/driver/magento/testing | CustomerPaymentFactory', () => {
  let factory: MagentoTokenBaseCardFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoTokenBaseCardFactory],
    });

    factory = TestBed.inject(MagentoTokenBaseCardFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoTokenBaseCard;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CustomerPayment with all required fields defined', () => {
      expect(result.hash).toBeDefined();
      expect(result.address).toBeDefined();
      expect(result.customer_email).toBeDefined();
      expect(result.customer_id).toBeDefined();
      expect(result.method).toBeDefined();
      expect(result.active).toBeDefined();
      expect(result.created_at).toBeDefined();
      expect(result.updated_at).toBeDefined();
      expect(result.last_use).toBeDefined();
      expect(result.expires).toBeDefined();
      expect(result.label).toBeDefined();
      expect(result.additional.cc_type).toBeDefined();
      expect(result.additional.cc_owner).toBeDefined();
      expect(result.additional.cc_last4).toBeDefined();
      expect(result.additional.cc_exp_year).toBeDefined();
      expect(result.additional.cc_exp_month).toBeDefined();
    });
  });
});
