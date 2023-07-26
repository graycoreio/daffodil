import { TestBed } from '@angular/core/testing';
import {
  cold,
  hot,
} from 'jasmine-marbles';

import {
  DaffAuthorizeNetPastCCExpirationError,
  DaffAuthorizeNetPaymentId,
} from '@daffodil/authorizenet/driver';
import { DaffCustomerPaymentAuthorizeNetApplyRequest } from '@daffodil/customer-payment-authorizenet';
import { DaffCustomerPaymentAuthorizeNetApplyRequestFactory } from '@daffodil/customer-payment-authorizenet/testing';

import { DaffCustomerPaymentAuthorizeNetMagentoPaymentService } from './payment.service';


describe('@daffodil/customer-payment-authorizenet/driver/magento | DaffCustomerPaymentAuthorizeNetMagentoPaymentService', () => {
  let service: DaffCustomerPaymentAuthorizeNetMagentoPaymentService;

  let requestFactory: DaffCustomerPaymentAuthorizeNetApplyRequestFactory;

  let paymentId: string;
  let mockRequest: DaffCustomerPaymentAuthorizeNetApplyRequest;

  beforeEach(() => {
    paymentId = 'paymentId';

    TestBed.configureTestingModule({
      providers: [
        DaffCustomerPaymentAuthorizeNetMagentoPaymentService,
        {
          provide: DaffAuthorizeNetPaymentId,
          useValue: paymentId,
        },
      ],
    });

    service = TestBed.inject(DaffCustomerPaymentAuthorizeNetMagentoPaymentService);
    requestFactory = TestBed.inject(DaffCustomerPaymentAuthorizeNetApplyRequestFactory);

    mockRequest = requestFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateToken', () => {
    it('should return the formatted response', () => {
      const expected = cold('(a|)', { a: {
        method: paymentId,
        data: {
          code: paymentId,
          tokenbase_data: {
            card_id: mockRequest.data.id,
            cc_cid: mockRequest.data.securityCode,
          },
        },
      }});
      expect(service.generateToken(mockRequest)).toBeObservable(expected);
    });
  });
});
