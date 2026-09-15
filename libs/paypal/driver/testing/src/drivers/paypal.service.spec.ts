import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffPaypalExpressTokenRequest,
  DaffPaypalExpressTokenResponse,
} from '@daffodil/paypal';
import { DaffPaypalExpressServiceInterface } from '@daffodil/paypal/driver';
import {
  DaffPaypalExpressTokenRequestFactory,
  DaffPaypalExpressTokenResponseFactory,
} from '@daffodil/paypal/testing';

import { DaffTestingPaypalService } from './paypal.service';

describe('@daffodil/paypal/driver/testing | DaffTestingPaypalService', () => {
  let paypalService: DaffPaypalExpressServiceInterface<DaffPaypalExpressTokenRequest, DaffPaypalExpressTokenResponse>;
  let paypalTokenRequestFactory: DaffPaypalExpressTokenRequestFactory;
  const paypalTokenResponseFactory: DaffPaypalExpressTokenResponseFactory = new DaffPaypalExpressTokenResponseFactory();
  const paypalTokenResponse = paypalTokenResponseFactory.create();
  let paypalRequest: DaffPaypalExpressTokenRequest;
  const mockPaypalTokenResponseFactory = jasmine.createSpyObj('DaffPaypalExpressTokenResponseFactory', ['create']);
  mockPaypalTokenResponseFactory.create.and.returnValue(paypalTokenResponse);

  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffPaypalExpressTokenResponseFactory, useValue: mockPaypalTokenResponseFactory },
        DaffTestingPaypalService,
      ],
    });

    paypalService = TestBed.inject(DaffTestingPaypalService);
    paypalTokenRequestFactory = TestBed.inject(DaffPaypalExpressTokenRequestFactory);

    paypalRequest = paypalTokenRequestFactory.create();

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(paypalService).toBeTruthy();
  });

  describe('generateToken', () => {

    it('should return a paypal token response', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(paypalService.generateToken('cartId', paypalRequest)).toBe('(a|)', { a: paypalTokenResponse });
      });
    });
  });
});
