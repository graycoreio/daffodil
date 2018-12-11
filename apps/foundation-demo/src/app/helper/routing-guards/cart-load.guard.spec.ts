import { TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

import { 
  Cart, 
  DaffCartFactory, 
  DaffCoreTestingModule, 
  fromCart, 
  CartLoad, 
  CartLoadSuccess 
} from '@daffodil/cart';

import { CartLoadGuard } from './cart-load.guard';

xdescribe('CartLoadGuard', () => {
  let cartLoadGuard: CartLoadGuard;
  let result: Observable<boolean>;
  let cartFactory: DaffCartFactory;
  let stubCart: Cart;
  let store: Store<fromCart.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(fromCart.reducers),
        }),
        RouterTestingModule,
        DaffCoreTestingModule
      ],
      providers: [
        CartLoadGuard
      ]
    });

    cartLoadGuard = TestBed.get(CartLoadGuard);
    cartFactory = TestBed.get(DaffCartFactory);
    stubCart = cartFactory.create();
    store = TestBed.get(Store);
  }));

  it('should be created', () => {
    expect(cartLoadGuard).toBeTruthy();
  });

  describe('when the cart is null', () => {
    it('should not activate', () => {
      cartLoadGuard.canActivate().subscribe((activate)=> {
        expect(activate).toEqual(false);
      });
    });
  
    it('should dispatch a `CartLoad` action', () => {
      cartLoadGuard.canActivate().subscribe((cart) => {
        expect(store.dispatch).toHaveBeenCalledWith(new CartLoad());
      });
    });
  });

  describe('when the cart is defined', () => {
    beforeEach(() => {
      store.dispatch(
        new CartLoadSuccess(cartFactory.create())
      );
      
      result = cartLoadGuard.canActivate();
    });

    it('should not dispatch any actions', () => {
      expect(store.dispatch).not.toHaveBeenCalled();
    });
  
    it('should activate', () => {
      result.subscribe((cart) => {
        expect(cart).not.toBeNull();
      });
    });
  })
});
