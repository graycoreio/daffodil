import { TestBed } from '@angular/core/testing';

import { DaffPaypalExpressPaymentRequest } from '@daffodil/paypal';
import { MAGENTO_PAYPAL_EXPRESS_PAYMENT_METHOD } from '@daffodil/paypal/driver/magento';
import { DaffPaypalExpressPaymentRequestFactory } from '@daffodil/paypal/testing';

import { DaffMagentoPaypalPaymentService } from './paypal-payment.service';

describe('@daffodil/paypal/driver/magento | DaffMagentoPaypalPaymentService', () => {
  let service: DaffMagentoPaypalPaymentService;
  let paypalExpressRequestFactory: DaffPaypalExpressPaymentRequestFactory;
  let paypalExpressRequest: DaffPaypalExpressPaymentRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoPaypalPaymentService,
      ],
    });

    service = TestBed.inject(DaffMagentoPaypalPaymentService);
    paypalExpressRequestFactory = TestBed.inject(DaffPaypalExpressPaymentRequestFactory);

    paypalExpressRequest = paypalExpressRequestFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateToken', () => {
    it('should return an observable paypalExpressRequest', () => {
      service.generateToken(paypalExpressRequest).subscribe(result => {
        expect(result).toEqual({
          method: MAGENTO_PAYPAL_EXPRESS_PAYMENT_METHOD,
          data: {
            code: MAGENTO_PAYPAL_EXPRESS_PAYMENT_METHOD,
            [MAGENTO_PAYPAL_EXPRESS_PAYMENT_METHOD]: {
              token: paypalExpressRequest.data.token,
              payer_id: paypalExpressRequest.data.payerId,
            },
          },
        });
      });
    });
  });
});
