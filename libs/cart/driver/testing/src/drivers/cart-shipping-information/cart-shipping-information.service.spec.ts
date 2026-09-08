import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartShippingRate,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';

import { DaffTestingCartShippingInformationService } from './cart-shipping-information.service';

describe('Driver | Testing | Cart | CartShippingInformationService', () => {
  let service: DaffTestingCartShippingInformationService;
  let cartFactory: DaffCartFactory;
  let cartShippingRateFactory: DaffCartShippingRateFactory;
  let scheduler: TestScheduler;

  let mockCart: DaffCart;
  let mockCartShippingInfo: DaffCartShippingRate;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartShippingInformationService,
      ],
    });

    service = TestBed.inject(DaffTestingCartShippingInformationService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartShippingRateFactory = TestBed.inject(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingInfo = cartShippingRateFactory.create();
    mockCart.shipping_information = mockCartShippingInfo;
    cartId = mockCart.id;

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a cart\'s shipping info', () => {
    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.get(cartId)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });

  describe('update', () => {
    const newPrice = 56.34;
    const info: Partial<DaffCartShippingRate> = { price: newPrice };

    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.update(cartId, info)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });

  describe('delete | deleting the selected shipping method', () => {
    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.delete(cartId)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });
});
