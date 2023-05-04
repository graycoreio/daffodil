import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import { DaffCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/testing';

import { DaffCustomerStoreCreditInMemoryBackendService } from './store-credit.service';

describe('@daffodil/customer-store-credit/driver/in-memory | DaffCustomerStoreCreditInMemoryBackendService', () => {
  let service: DaffCustomerStoreCreditInMemoryBackendService;
  let storeCreditFactory: DaffCustomerStoreCreditFactory;
  let mockStoreCredit: DaffCustomerStoreCredit;
  let reqInfoStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerStoreCreditInMemoryBackendService,
      ],
    });

    storeCreditFactory = TestBed.inject(DaffCustomerStoreCreditFactory);
    service = TestBed.inject(DaffCustomerStoreCreditInMemoryBackendService);

    mockStoreCredit = storeCreditFactory.create();
    reqInfoStub = {
      utils: {
        createResponse$: (func) => of(func()),
        getJsonBody: (req) => req.body,
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    let result: Observable<any>;

    beforeEach(() => {
      service.storeCredit = mockStoreCredit;
      result = service.get(reqInfoStub);
    });

    it('should return the store credit', done => {
      result.subscribe(res => {
        expect(res.body).toEqual(mockStoreCredit);
        expect(res.status).toEqual(STATUS.OK);
        done();
      });
    });
  });
});
