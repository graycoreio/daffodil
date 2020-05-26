import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
	DaffCartAddress,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartBillingAddressService } from './cart-billing-address.service';

describe('DaffInMemoryBackendCartBillingAddressService', () => {
  let service: DaffInMemoryBackendCartBillingAddressService;
  let cartFactory: DaffCartFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let mockCart: DaffCart;
  let mockCartAddress: DaffCartAddress;
  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;
  let collection: DaffCart[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartBillingAddressService,
      ]
    });
    service = TestBed.get(DaffInMemoryBackendCartBillingAddressService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartAddressFactory = TestBed.get(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartAddress = cartAddressFactory.create();
    mockCart.billing_address = mockCartAddress;
    collection = [mockCart];
    cartId = mockCart.id;
    baseUrl = 'api/cart-billing-address/';
    cartUrl = `/${baseUrl}${cartId}/`;
    reqInfoStub = {
      id: cartId,
      resourceUrl: baseUrl,
      collection,
      req: {
        body: {}
      },
      utils: {
        createResponse$: func => func(),
        getJsonBody: req => req.body,
        findById: (ary, id) => ary.find(e => e.id === id)
      }
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('processing a get billing address request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the cart billing address', () => {
      expect(result.body).toEqual(mockCartAddress);
    });
  });

  describe('processing an update billing address request', () => {
    let result;
    let updatedStreet;

    beforeEach(() => {
      updatedStreet = `${mockCartAddress.street} updated`;
      mockCartAddress.street = updatedStreet;
      reqInfoStub.url = cartUrl;
      reqInfoStub.req.body = mockCartAddress;

      result = service.put(reqInfoStub);
    });

    it('should return a cart with the updated street', () => {
      expect(result.body.billing_address.street).toEqual(updatedStreet);
		});
  });
});
