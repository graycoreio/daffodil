import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { DaffCartWithStoreCreditFactory } from '@daffodil/cart-store-credit/testing';
import { DaffProductTestingModule } from '@daffodil/product/testing';

import { DaffCartStoreCreditInMemoryBackendService } from './store-credit.service';

describe('@daffodil/cart-store-credit/driver/in-memory | DaffCartStoreCreditInMemoryBackendService', () => {
  let service: DaffCartStoreCreditInMemoryBackendService;
  let storeCreditFactory: DaffCartWithStoreCreditFactory;
  let mockStoreCredit: DaffCartWithStoreCredit;
  let reqInfoStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
      providers: [
        DaffCartStoreCreditInMemoryBackendService,
      ],
    });

    storeCreditFactory = TestBed.inject(DaffCartWithStoreCreditFactory);
    service = TestBed.inject(DaffCartStoreCreditInMemoryBackendService);

    mockStoreCredit = storeCreditFactory.create();
    reqInfoStub = {
      utils: {
        createResponse$: (func) => of(func()),
        getJsonBody: (req) => req.body,
        findById: (ary, id) => ary.find(e => e.id === id),
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('post', () => {
    let result: Observable<any>;

    beforeEach(() => {
      result = service.post(reqInfoStub);
    });

    it('should return', done => {
      result.subscribe(res => {
        expect(res.status).toEqual(STATUS.OK);
        done();
      });
    });
  });

  describe('delete', () => {
    let result: Observable<any>;

    beforeEach(() => {
      result = service.delete(reqInfoStub);
    });

    it('should return', done => {
      result.subscribe(res => {
        expect(res.status).toEqual(STATUS.OK);
        done();
      });
    });
  });
});
