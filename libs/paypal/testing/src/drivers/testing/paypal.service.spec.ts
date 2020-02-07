import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffPaypalServiceInterface, DaffPaypalTokenRequest, DaffPaypalTokenResponse } from '@daffodil/paypal';

import { DaffTestingPaypalService } from './paypal.service';
import { DaffPaypalTokenResponseFactory } from '../../factories/paypal-token-response.factory';

describe('Testing | Drivers | Testing | PaypalService', () => {
  let paypalService: DaffPaypalServiceInterface<DaffPaypalTokenRequest, DaffPaypalTokenResponse>;
  const paypalTokenResponseFactory: DaffPaypalTokenResponseFactory = new DaffPaypalTokenResponseFactory();
  const paypalTokenResponse = paypalTokenResponseFactory.create();
  const mockPaypalTokenResponseFactory = jasmine.createSpyObj('DaffPaypalTokenResponseFactory', ['create']);
  mockPaypalTokenResponseFactory.create.and.returnValue(paypalTokenResponse);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffPaypalTokenResponseFactory, useValue: mockPaypalTokenResponseFactory },
        DaffTestingPaypalService
      ]
    });
    paypalService = TestBed.get(DaffTestingPaypalService);
  });

  it('should be created', () => {
    expect(paypalService).toBeTruthy();
  });

  describe('generateToken', () => {

    it('should return a paypal token response', () => {
      const expected = cold('(a|)', { a: paypalTokenResponse });
      expect(paypalService.generateToken({
				cartId: 'cartId'
			})).toBeObservable(expected);
    });
  });
});
