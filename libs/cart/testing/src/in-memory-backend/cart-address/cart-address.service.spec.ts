import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
	DaffCartAddress,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartAddressService } from './cart-address.service';

describe('DaffInMemoryBackendCartAddressService', () => {
  let service: DaffInMemoryBackendCartAddressService;
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
        DaffInMemoryBackendCartAddressService,
      ]
    });
    service = TestBed.get(DaffInMemoryBackendCartAddressService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartAddressFactory = TestBed.get(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartAddress = cartAddressFactory.create();
    mockCart.billing_address = mockCartAddress;
    collection = [mockCart];
    cartId = mockCart.id;
    baseUrl = 'api/cart-address/';
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

  describe('processing an update cart address request', () => {
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
      expect(result.body.shipping_address.street).toEqual(updatedStreet);
		});
  });
});
