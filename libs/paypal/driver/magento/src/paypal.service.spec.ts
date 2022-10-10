import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import {
  DaffPaypalExpressTokenResponse,
  DaffPaypalExpressTokenRequest,
} from '@daffodil/paypal';
import {
  DaffPaypalExpressDriverConfig,
  DAFF_PAYPAL_EXPRESS_DRIVER_CONFIG,
} from '@daffodil/paypal/driver';
import {
  MagentoPaypalTokenRequest,
  MagentoPaypalExpressToken,
  magentoGenerateTokenMutation,
  MAGENTO_PAYPAL_EXPRESS_DRIVER_CONFIG_DEFAULT,
} from '@daffodil/paypal/driver/magento';
import {
  DaffPaypalExpressTokenRequestFactory,
  DaffPaypalExpressTokenResponseFactory,
} from '@daffodil/paypal/testing';

import { DaffMagentoPaypalService } from './paypal.service';

describe('@daffodil/paypal/driver/magento | DaffMagentoPaypalService', () => {
  let service: DaffMagentoPaypalService;
  let paypalTokenResponseFactory: DaffPaypalExpressTokenResponseFactory;
  let paypalTokenRequestFactory: DaffPaypalExpressTokenRequestFactory;
  let controller: ApolloTestingController;

  let paypalTokenResponse: DaffPaypalExpressTokenResponse;
  let paypalTokenRequest: DaffPaypalExpressTokenRequest;
  let cartId: string;
  const paypalConfig: DaffPaypalExpressDriverConfig = {
    ...MAGENTO_PAYPAL_EXPRESS_DRIVER_CONFIG_DEFAULT,
    urls: {
      return: 'return',
      cancel: 'cancel',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoPaypalService,
        { provide: DAFF_PAYPAL_EXPRESS_DRIVER_CONFIG, useValue: paypalConfig },
      ],
    });

    paypalTokenResponseFactory = TestBed.inject(DaffPaypalExpressTokenResponseFactory);
    paypalTokenRequestFactory = TestBed.inject(DaffPaypalExpressTokenRequestFactory);
    controller = TestBed.inject(ApolloTestingController);
    service = TestBed.inject(DaffMagentoPaypalService);

    paypalTokenResponse = paypalTokenResponseFactory.create();
    paypalTokenRequest = paypalTokenRequestFactory.create();
    cartId = 'cartId';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateToken', () => {
    it('should return an observable paypalTokenResponse', () => {
      const paypalMagentoTokenResponse: MagentoPaypalExpressToken = {
        token: paypalTokenResponse.token,
        paypal_urls: {
          start: paypalTokenResponse.urls.start,
          edit: paypalTokenResponse.urls.edit,
        },
      };

      service.generateToken(cartId, paypalTokenRequest).subscribe((result: DaffPaypalExpressTokenResponse) => {
        expect(result).toEqual(paypalTokenResponse);
      });

      const op = controller.expectOne(magentoGenerateTokenMutation);

      expect(op.operation.variables.cartId).toEqual(cartId);
      expect(op.operation.variables.button).toEqual(paypalTokenRequest.button);
      expect(op.operation.variables.returnUrl).toEqual(paypalConfig.urls.return);
      expect(op.operation.variables.cancelUrl).toEqual(paypalConfig.urls.cancel);

      op.flush({
        data: {
          createPaypalExpressToken: paypalMagentoTokenResponse,
        },
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
