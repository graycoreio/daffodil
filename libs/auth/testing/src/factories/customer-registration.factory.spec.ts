import { TestBed } from '@angular/core/testing';

import { DaffCustomerRegistration } from '@daffodil/auth';
import { DaffCustomerRegistrationFactory } from './customer-registration.factory';

describe('Auth | Testing | Factories | CustomerRegistrationFactory', () => {

  let customerRegistrationFactory: DaffCustomerRegistrationFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCustomerRegistrationFactory]
    });

    customerRegistrationFactory = TestBed.get(DaffCustomerRegistrationFactory);
  });

  it('should be created', () => {
    expect(customerRegistrationFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCustomerRegistration;

    beforeEach(() => {
      result = customerRegistrationFactory.create();
    });

    it('should return a CustomerRegistration with all required fields defined', () => {
      expect(result.email).toBeDefined();
      expect(result.firstName).toBeDefined();
      expect(result.lastName).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: DaffCustomerRegistration[];

    it('should create as many CustomerRegistrations as desired', () => {
      result = customerRegistrationFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = customerRegistrationFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
