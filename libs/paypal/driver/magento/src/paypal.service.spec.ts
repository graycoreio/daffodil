import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from '@damienwebdev/apollo-angular/testing';

import {
  DaffPaypalTokenResponse,
  DaffPaypalTokenRequest,
} from '@daffodil/paypal';
import {
  DaffPaypalTransformer,
  DaffPaypalConfig,
} from '@daffodil/paypal/driver';
import {
  DaffMagentoPaypalConfig,
  DaffMagentoPaypalTransformerService,
  MagentoPaypalTokenRequest,
  MagentoPaypalExpressToken,
  GenerateTokenMutation,
} from '@daffodil/paypal/driver/magento';
import { DaffPaypalTokenResponseFactory } from '@daffodil/paypal/testing';

import { DaffMagentoPaypalService } from './paypal.service';

describe('Driver | Magento | Paypal | PaypalService', () => {
  let service: DaffMagentoPaypalService;
  let paypalTokenResponseFactory: DaffPaypalTokenResponseFactory;
  let controller: ApolloTestingController;
  const paypalConfig: DaffMagentoPaypalConfig = {
    return_url: 'return',
    cancel_url: 'cancel',
    success_url: 'success',
    pending_url: 'pending',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoPaypalService,
        { provide: DaffPaypalTransformer, useExisting: DaffMagentoPaypalTransformerService },
        { provide: DaffPaypalConfig, useValue: paypalConfig },
      ],
    });

    controller = TestBed.inject(ApolloTestingController);

    service = TestBed.inject(DaffMagentoPaypalService);
    paypalTokenResponseFactory = TestBed.inject(DaffPaypalTokenResponseFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateToken', () => {
    it('should return an observable paypalTokenResponse', () => {
      const paypalTokenResponse: DaffPaypalTokenResponse = paypalTokenResponseFactory.create();
      const paypalTokenRequest: DaffPaypalTokenRequest = {
        cartId: 'cartId',
      };
      const paypalMagentoTokenRequest: MagentoPaypalTokenRequest = {
        cart_id: paypalTokenRequest.cartId,
        code: 'paypal_express',
        express_button: false,
        use_paypal_credit: false,
        urls: {
          cancel_url: paypalConfig.cancel_url,
          return_url: paypalConfig.return_url,
          pending_url: paypalConfig.pending_url,
          success_url: paypalConfig.success_url,
        },
      };
      const paypalMagentoTokenResponse: MagentoPaypalExpressToken = {
        token: paypalTokenResponse.token,
        paypal_urls: {
          start: paypalTokenResponse.urls.start,
          edit: paypalTokenResponse.urls.edit,
        },
      };

      service.generateToken(paypalTokenRequest).subscribe((result: DaffPaypalTokenResponse) => {
        expect(result).toEqual(paypalTokenResponse);
      });

      const op = controller.expectOne(GenerateTokenMutation);

      expect(op.operation.variables.input).toEqual(paypalMagentoTokenRequest);

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
