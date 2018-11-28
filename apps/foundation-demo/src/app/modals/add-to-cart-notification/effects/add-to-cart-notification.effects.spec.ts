import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { provideMockActions } from '@ngrx/effects/testing';

import { AddToCartNotificationEffects } from './add-to-cart-notification.effects';
import { AddToCart } from '@daffodil/state';
import { OpenAddToCartNotification } from '../actions/add-to-cart-notification.actions';
import { hot, cold } from 'jasmine-marbles';

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
