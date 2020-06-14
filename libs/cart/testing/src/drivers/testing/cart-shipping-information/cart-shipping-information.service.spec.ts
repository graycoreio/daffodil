import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartShippingRate,
  DaffCartShippingInformation
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';

import { DaffTestingCartShippingInformationService } from './cart-shipping-information.service';

describe('Driver | Testing | Cart | CartShippingInformationService', () => {
  let service: DaffTestingCartShippingInformationService;
  let cartFactory: DaffCartFactory;
  let cartShippingRateFactory: DaffCartShippingRateFactory;

  let mockCart: DaffCart;
  let mockCartShippingInfo: DaffCartShippingInformation;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartShippingInformationService
      ]
    });

    service = TestBed.get(DaffTestingCartShippingInformationService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartShippingRateFactory = TestBed.get(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingInfo = {
      ...cartShippingRateFactory.create(),
      address_id: 0
    };
    mockCart.shipping_information = mockCartShippingInfo;
    cartId = mockCart.id;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a cart\'s shipping info', () => {
    it('should send a get request', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.get(cartId)).toBeObservable(expected);
    });
  });

  describe('update', () => {
    const newPrice = 56.34;
    const info: Partial<DaffCartShippingRate> = {price: newPrice};

    it('should send a put request', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.update(cartId, info)).toBeObservable(expected);
    });
  });

  describe('delete | deleting the selected shipping method', () => {
    it('should send a delete request', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.delete(cartId)).toBeObservable(expected);
    });
  });
});
