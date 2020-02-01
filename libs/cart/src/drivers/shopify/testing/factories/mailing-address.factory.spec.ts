import { TestBed } from '@angular/core/testing';

import { MailingAddress } from '../../models/mailing-address';
import { MailingAddressFactory } from './mailing-address.factory';

describe('Driver | Shopify | Cart | Testing | Factories | MailingAddressFactory', () => {

  let mailingAddressFactory: MailingAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailingAddressFactory]
    });

    mailingAddressFactory = TestBed.get(MailingAddressFactory);
  });

  it('should be created', () => {
    expect(mailingAddressFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MailingAddress;

    beforeEach(() => {
      result = mailingAddressFactory.create();
    });

    it('should return a MailingAddress with all required fields defined', () => {
      expect(result.customer_id).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.shipping_rate).toBeDefined();
      expect(result.address1).toBeDefined();
      expect(result.address2).toBeDefined();
      expect(result.city).toBeDefined();
      expect(result.company).toBeDefined();
      expect(result.country).toBeDefined();
      expect(result.firstName).toBeDefined();
      expect(result.lastName).toBeDefined();
      expect(result.province).toBeDefined();
      expect(result.zip).toBeDefined();
      expect(result.phone).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: MailingAddress[];

    it('should create as many mailing addresses as desired', () => {
      result = mailingAddressFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = mailingAddressFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
