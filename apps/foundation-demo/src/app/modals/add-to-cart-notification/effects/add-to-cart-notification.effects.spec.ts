import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { provideMockActions } from '@ngrx/effects/testing';

import { AddToCart } from '@daffodil/cart';

import { AddToCartNotificationEffects } from './add-to-cart-notification.effects';
import { OpenAddToCartNotification } from '../actions/add-to-cart-notification.actions';

describe('AddToCartNotificationEffects', () => {
  let actions$: Observable<any>;
  let effects: AddToCartNotificationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddToCartNotificationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AddToCartNotificationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when AddToCartAction is triggered', () => {

    let expected;
    const addToCartAction = new AddToCart({productId: 'id', qty: 1});
  
    beforeEach(() => {
      const openAddToCartNotificationAction = new OpenAddToCartNotification();
      actions$ = hot('--a', { a: addToCartAction });
      expected = cold('--b', { b: openAddToCartNotificationAction });
    });
    
    it('should dispatch a OpenAddToCartNotification action', () => {
      expect(effects.addToCart$).toBeObservable(expected);
    });
  });
});
