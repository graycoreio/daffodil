import { TestBed } from '@angular/core/testing';

import {
  DaffAccountRegistration,
} from '@daffodil/auth';
import { DaffAccountRegistrationFactory } from '@daffodil/auth/testing';

import { DaffMagentoLoginInfoTransformerService } from './login-info-transformer.service';

describe('DaffMagentoLoginInfoTransformerService', () => {
  let service: DaffMagentoLoginInfoTransformerService;

  const accountRegistrationFactory = new DaffAccountRegistrationFactory();

  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoLoginInfoTransformerService
      ]
    });

    service = TestBed.get(DaffMagentoLoginInfoTransformerService);

    mockRegistration = accountRegistrationFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming the account registration into login info', () => {
    let transformedLoginInfo;

    beforeEach(() => {
      transformedLoginInfo = service.transform(mockRegistration);
    })

    it('should return a DaffLoginInfo with the correct fields', () => {
      expect(transformedLoginInfo).toEqual(jasmine.objectContaining({
        email: mockRegistration.customer.email,
        password: mockRegistration.password
      }));
    });

    describe('when the argument is null', () => {
      beforeEach(() => {
        transformedLoginInfo = service.transform(null);
      });

      it('should return null and not throw an error', () => {
        expect(transformedLoginInfo).toBeNull();
      });
    });
  });
});
