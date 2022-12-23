import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCustomerInMemoryBackendService } from './customer.service';

describe('@daffodil/customer/driver/in-memory | DaffCustomerInMemoryBackendService', () => {
  let service: DaffCustomerInMemoryBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerInMemoryBackendService,
      ],
    });

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
        expect(service.customers).toContain(res.body);
        done();
      });
    });
  });
});
