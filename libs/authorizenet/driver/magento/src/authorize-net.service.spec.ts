import { TestBed } from '@angular/core/testing';

import { AcceptType, AuthorizeNetResponse, DaffAuthorizeNetCreditCard, DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import { DaffAuthorizeNetConfig, DaffAuthorizeNetConfigToken, DaffAuthorizeNetPastCCExpirationError } from '@daffodil/authorizenet/driver';
import { MagentoAuthorizeNetPayment } from '@daffodil/authorizenet/driver/magento';
import { hot } from 'jasmine-marbles';

import { DaffMagentoAuthorizeNetService } from './authorize-net.service';

describe('Driver | Magento | Authorize.net | DaffMagentoAuthorizeNetService', () => {
  let service: DaffMagentoAuthorizeNetService;

  let acceptSpy: jasmine.Spy;

  let stubCreditCard: DaffAuthorizeNetCreditCard;
  let request: DaffAuthorizeNetTokenRequest;
  let authorizeNetResponse: AuthorizeNetResponse;
  let authorizeNetPayment: MagentoAuthorizeNetPayment;
  let expectedRequestObject;

  const ccNumber = '1243123412341234';
  const ccLast4 = '1234';
  const stubAuthData: DaffAuthorizeNetConfig = {
    apiLoginID: 'apiLoginID',
    clientKey: 'clientKey'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoAuthorizeNetService,
        {
					provide: DaffAuthorizeNetConfigToken,
					useValue: stubAuthData
				},
      ]
    });

    service = TestBed.inject(DaffMagentoAuthorizeNetService);

    stubCreditCard = {
      cardnumber: ccNumber,
      month: 'month',
      year: 'year',
      securitycode: 'securitycode',
    }

    request = {
      creditCard: stubCreditCard
    };
    expectedRequestObject = {
      cardData: {
        cardNumber: stubCreditCard.cardnumber,
        cardCode: stubCreditCard.securitycode,
        month: stubCreditCard.month,
        year: stubCreditCard.year
      },
      authData: {
        clientKey: stubAuthData.clientKey,
        apiLoginID: stubAuthData.apiLoginID
      }
    };
    authorizeNetResponse = {
      messages: {
        resultCode: 'Success',
        message: []
      },
      opaqueData: {
        dataValue: 'paymentNonce',
        dataDescriptor: null
      }
    };
    authorizeNetPayment = {
      code: 'authorizenet_acceptjs',
      authorizenet_acceptjs: {
        cc_last_4: parseInt(ccLast4, 10),
        opaque_data_descriptor: 'COMMON.ACCEPT.INAPP.PAYMENT',
        opaque_data_value: 'paymentNonce'
      }
    };

    acceptSpy = jasmine.createSpy();

    (window as any).Accept = {dispatchData: acceptSpy};
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateToken | generating a payment token with acceptjs', () => {
    describe('when the request completes successfully', () => {
      beforeEach(() => {
        acceptSpy.and.callFake((_, cb) => cb(authorizeNetResponse))
      });

      it('should return the payment info', () => {
        (window as any).Accept = {dispatchData: acceptSpy};
        const expected = hot('a', {a: authorizeNetPayment});
        expect(service.generateToken(request)).toBeObservable(expected);
      });
    });

    describe('when the request completes with an past CC expiration date error', () => {
      let errorResponse;
      let errorMessage: string;

      beforeEach(() => {
        errorMessage = 'errorMessage';
        errorResponse = {
          messages: {
            resultCode: 'Error',
            message: [
              {
                code: 'E_WC_08',
                text: errorMessage
              }
            ]
          }
        };
        acceptSpy.and.callFake((_, cb) => cb(errorResponse))
      });

      it('should throw a past CC expiration error', () => {
        (window as any).Accept = {dispatchData: acceptSpy};
        const error = new DaffAuthorizeNetPastCCExpirationError(`E_WC_08: ${errorMessage}`);
        const expected = hot('#', {}, error);
        expect(service.generateToken(request)).toBeObservable(expected);
      });
    });
  });

  afterEach(() => {
    // clean up for subsequent tests
    (window as any).Accept = undefined;
  })
});
