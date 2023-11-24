import { TestBed } from '@angular/core/testing';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffPaymentTestingModule } from '@daffodil/payment/testing';

import { DaffPaymentInMemoryBackendService } from './payment.service';

describe('@daffodil/payment/driver/in-memory | DaffPaymentInMemoryBackendService', () => {
  let service: DaffPaymentInMemoryBackendService;

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
