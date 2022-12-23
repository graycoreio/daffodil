import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCustomer } from '@daffodil/customer';
import { DaffCustomerFactory } from '@daffodil/customer/testing';

import { DaffCustomerInMemoryBackendService } from './customer.service';

describe('@daffodil/customer/driver/in-memory | DaffCustomerInMemoryBackendService', () => {
  let service: DaffCustomerInMemoryBackendService;
  let customerFactory: DaffCustomerFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerInMemoryBackendService,
      ],
    });

    customerFactory = TestBed.inject(DaffCustomerFactory);
    service = TestBed.inject(DaffCustomerInMemoryBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    let reqInfoStub;
    let result: Observable<any>;

    beforeEach(() => {
      reqInfoStub = {
        utils: {
          createResponse$: (func) => of(func()),
        },
      };

      result = service.get(reqInfoStub);
    });

    it('should return a customer response', done => {
      result.subscribe(res => {
        expect(res.body).toBeDefined();
        expect(res.status).toEqual(STATUS.OK);
        done();
      });
    });

    it('should should add the customer to the DB', done => {
      result.subscribe(res => {
        expect(service.customers[res.body.id]).toEqual(res.body);
        done();
      });
    });
  });

  describe('put', () => {
    let reqInfoStub;
    let result: Observable<any>;

    describe('updating a customer', () => {
      let mockCustomer: DaffCustomer;

      beforeEach(() => {
        mockCustomer = customerFactory.create();

        reqInfoStub = {
          utils: {
            createResponse$: (func) => of(func()),
            getJsonBody: req => req,
          },
          id: 'customer',
          req: mockCustomer,
        };
      });

      describe('when the customer exists in the DB', () => {
        beforeEach(() => {
          service.customers[mockCustomer.id] = <DaffCustomer>{ id: mockCustomer.id };
          result = service.put(reqInfoStub);
        });

        it('should return the updated customer', done => {
          result.subscribe(res => {
            expect(res.body).toEqual(mockCustomer);
            expect(res.status).toEqual(STATUS.OK);
            done();
          });
        });

        it('should update the customer in the DB', done => {
          result.subscribe(res => {
            expect(service.customers[mockCustomer.id]).toEqual(mockCustomer);
            done();
          });
        });
      });

      describe('when the customer does not exist in the DB', () => {
        beforeEach(() => {
          service.customers[mockCustomer.id] = null;
          result = service.put(reqInfoStub);
        });

        it('should return not found', done => {
          result.subscribe(res => {
            expect(res.status).toEqual(STATUS.NOT_FOUND);
            done();
          });
        });
      });
    });
  });
});
