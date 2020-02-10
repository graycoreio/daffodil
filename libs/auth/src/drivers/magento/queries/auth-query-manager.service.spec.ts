import { TestBed } from '@angular/core/testing';

import { DaffAccountRegistration, DaffCustomerRegistration, DaffLoginInfo } from '@daffodil/auth';
import { DaffAccountRegistrationFactory } from '@daffodil/auth/testing';

import { DaffMagentoAuthGraphQlQueryManagerService } from './auth-query-manager.service';

describe('DaffMagentoAuthGraphQlQueryManagerService', () => {
  let service: DaffMagentoAuthGraphQlQueryManagerService;

  const accountRegistrationFactory = new DaffAccountRegistrationFactory();

  let mockAccountRegistration: DaffAccountRegistration<DaffCustomerRegistration>;
  let mockLoginInfo: DaffLoginInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(DaffMagentoAuthGraphQlQueryManagerService);

    mockAccountRegistration = accountRegistrationFactory.create();
    mockLoginInfo = {
      email: mockAccountRegistration.customer.email,
      password: mockAccountRegistration.password
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateATokenMutation', () => {
    it('should set the variables', () => {
      const mutation = service.generateATokenMutation(mockLoginInfo);

      expect(mutation.variables.email).toEqual(mockLoginInfo.email);
      expect(mutation.variables.password).toEqual(mockLoginInfo.password);
    })

    it('should create the mutation', () => {
      const mutation = service.generateATokenMutation(mockLoginInfo);

      expect(mutation.mutation).toBeTruthy();
    })
  });

  describe('createACustomerMutation', () => {
    it('should set the variables', () => {
      const mutation = service.createACustomerMutation(mockAccountRegistration);

      expect(mutation.variables.email).toEqual(mockAccountRegistration.customer.email);
      expect(mutation.variables.password).toEqual(mockAccountRegistration.password);
      expect(mutation.variables.firstname).toEqual(mockAccountRegistration.customer.firstName);
      expect(mutation.variables.lastname).toEqual(mockAccountRegistration.customer.lastName);
    })

    it('should create the mutation', () => {
      const mutation = service.createACustomerMutation(mockAccountRegistration);

      expect(mutation.mutation).toBeTruthy();
    })
  });
});
