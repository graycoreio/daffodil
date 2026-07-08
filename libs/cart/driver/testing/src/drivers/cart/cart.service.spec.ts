import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffTestingCartService } from './cart.service';

describe('@daffodil/cart/driver/testing | DaffTestingCartService', () => {
  let service: DaffTestingCartService;
  let cartFactory: DaffCartFactory;
  let scheduler: TestScheduler;

  let mockCart: DaffCart;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingCartService,
      ],
    });

    service = TestBed.inject(DaffTestingCartService);

    cartFactory = TestBed.inject(DaffCartFactory);

    mockCart = cartFactory.create();
    cartId = mockCart.id;

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a cart', () => {
    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.get(cartId)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });

  describe('merge', () => {
    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.merge(cartId)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });

  describe('create | creating a cart', () => {
    it('should return a cart ID and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.create()).toBe('(a|)', { a: jasmine.objectContaining({
          id: jasmine.truthy(),
        }) });
      });
    });
  });

  describe('clear | clearing all items from the cart', () => {
    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.clear(cartId)).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });
});
