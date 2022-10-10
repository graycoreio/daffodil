import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffPaymentResponse } from '@daffodil/payment';
import {
  DaffPaymentResponseFactory,
  DaffPaymentTestingModule,
} from '@daffodil/payment/testing';

import { DaffPaymentInMemoryBackendService } from './payment.service';

describe('@daffodil/payment/driver/in-memory | DaffPaymentInMemoryBackendService', () => {
  let service: DaffPaymentInMemoryBackendService;
  let resultFactory: DaffPaymentResponseFactory;
  let mockResults1: DaffPaymentResponse[];
  let mockResults2: DaffPaymentResponse[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffPaymentTestingModule,
      ],
      providers: [
        DaffPaymentInMemoryBackendService,
      ],
    });

    service = TestBed.inject(DaffPaymentInMemoryBackendService);
    resultFactory = TestBed.inject(DaffPaymentResponseFactory);

    mockResults1 = resultFactory.createMany(3, { kind: 'TestBackend1' });
    mockResults2 = resultFactory.createMany(3, { kind: 'TestBackend2' });
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

    it('should return a payment response', done => {
      result.subscribe(res => {
        expect(res.body).toBeDefined();
        done();
      });
    });
  });
});
