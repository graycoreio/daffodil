import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { DaffAddToCart } from '@daffodil/cart/state';
import { DaffModalService } from '@daffodil/design/modal';
import { runMarbles } from '@daffodil/jasmine';

import { AddToCartNotificationEffects } from './add-to-cart-notification.effects';
import { OpenAddToCartNotification } from '../actions/add-to-cart-notification.actions';

describe('AddToCartNotificationEffects', () => {
  let actions$: Observable<any>;
  let effects: AddToCartNotificationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddToCartNotificationEffects,
        DaffModalService,
        provideMockStore(),
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(AddToCartNotificationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('addToCart$', () => {

    const addToCartAction = new DaffAddToCart({ productId: 'id', qty: 1 });

    it('should dispatch a OpenAddToCartNotification action', () => {
      runMarbles(helpers => {
        const openAddToCartNotificationAction = new OpenAddToCartNotification();
        actions$ = helpers.hot('--a', { a: addToCartAction });
        helpers.expectObservable(effects.addToCart$).toBe('--b', { b: openAddToCartNotificationAction });
      });
    });
  });
});
