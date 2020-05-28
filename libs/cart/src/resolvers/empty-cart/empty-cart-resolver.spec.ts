import { TestBed, async } from '@angular/core/testing';
import { Store, ActionsSubject, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';

import { DaffCart, DaffCartReducersState, DaffCartLoadSuccess }  from '@daffodil/cart';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

import { DaffEmptyCartResolver } from './empty-cart-resolver';

describe('DaffEmptyCartResolver', () => {
  const actions$: Observable<any> = null;
  let emptyCartResolver: DaffEmptyCartResolver;
  let store: Store<DaffCartReducersState>;
  let cartFactory: DaffCartFactory;
  let stubCart: DaffCart;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
      providers: [
        DaffEmptyCartResolver,
				provideMockActions(() => actions$),
				ActionsSubject
      ]
    });

    emptyCartResolver = TestBed.get(DaffEmptyCartResolver);
    cartFactory = TestBed.get(DaffCartFactory);
    stubCart = cartFactory.create();
    store = TestBed.get(Store);
  }));

  it('should be created', () => {
    expect(emptyCartResolver).toBeTruthy();
  });

  describe('isCartEmpty', () => {

    describe('when ResolveCartSuccess is dispatched with an empty cart', () => {
        
			it('should resolve to true', () => {
				emptyCartResolver.isCartEmpty().subscribe((isEmpty) => {
					expect(isEmpty).toEqual(true);
				});

				stubCart.items = [];
				store.dispatch(new DaffCartLoadSuccess(stubCart));
			});
		});
      
		describe('when ResolveCartSuccess is dispatched with cart with items', () => {
			
			it('should resolve to false', () => {
				emptyCartResolver.isCartEmpty().subscribe((isEmpty) => {
					expect(isEmpty).toEqual(false);
				});

				stubCart.items = [new DaffCartItemFactory().create()];
				store.dispatch(new DaffCartLoadSuccess(stubCart));
			});
		});

		describe('when ResolveCartSuccess is dispatched with a null cart', () => {
			
			it('should resolve to true', () => {
				emptyCartResolver.isCartEmpty().subscribe((isEmpty) => {
					expect(isEmpty).toEqual(true);
				});

				store.dispatch(new DaffCartLoadSuccess(null));
			});
		});
  });
});
