import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { DaffCart } from '@daffodil/cart';
import {
  DaffAddToCart,
  DaffAddToCartSuccess,
  DaffCartReducersState,
  daffCartReducers,
  DAFF_CART_STORE_FEATURE_KEY,
  daffCartItemEntitiesRetrievalActionsReducerFactory,
  daffCartRetrievalActionsReducerFactory,
  daffCartRetrivalActions,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductLoadSuccess,
  DaffProductReducersState,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { AddToCartNotificationComponent } from './add-to-cart-notification.component';
import {
  CloseAddToCartNotification,
  OpenAddToCartNotification,
} from '../../actions/add-to-cart-notification.actions';
import * as fromAddToCartNotification from '../../reducers/index';
import { ProductAddedComponent } from '../product-added/product-added.component';

describe('AddToCartNotificationComponent', () => {
  let fixture: ComponentFixture<AddToCartNotificationComponent>;
  let store: Store<{
    demoAddToCartNotification: fromAddToCartNotification.State;
    cart: DaffCartReducersState;
    [DAFF_PRODUCT_STORE_FEATURE_KEY]: DaffProductReducersState<DaffProduct>;
  }>;
  let productFactory: DaffProductFactory;
  let cartFactory: DaffCartFactory;

  let addToCartNotification: AddToCartNotificationComponent;
  let productAdded: ProductAddedComponent;
  let stubProduct: DaffProduct;
  let productAddPayload;
  let stubCart: DaffCart;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          demoAddToCartNotification: combineReducers(fromAddToCartNotification.reducers),
          [DAFF_CART_STORE_FEATURE_KEY]: daffComposeReducers<DaffCartReducersState>([
            combineReducers(daffCartReducers),
            combineReducers({
              cart: daffCartRetrievalActionsReducerFactory(daffCartRetrivalActions),
              cartItems: daffCartItemEntitiesRetrievalActionsReducerFactory(daffCartRetrivalActions),
              order: daffIdentityReducer,
            }),
          ]),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
        AddToCartNotificationComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
      providers: [
        provideNoopAnimations(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);
    productFactory = TestBed.inject(DaffProductFactory);

    stubProduct = productFactory.create();
    productAddPayload = { productId: stubProduct.id, qty: 1 };
    stubCart = cartFactory.create();

    fixture = TestBed.createComponent(AddToCartNotificationComponent);
    addToCartNotification = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(addToCartNotification).toBeTruthy();
  });

  describe('on demo-product-added', () => {


    beforeEach(() => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubProduct.id,
        products: [stubProduct],
      }));
      store.dispatch(new OpenAddToCartNotification());
      store.dispatch(new DaffAddToCart(productAddPayload));
      store.dispatch(new DaffAddToCartSuccess(stubCart));

      fixture.detectChanges();
      productAdded = fixture.debugElement.query(By.css('demo-product-added')).componentInstance;
    });

    it('should set product', () => {
      expect(productAdded.product).toEqual(stubProduct);
    });

    it('should set qty to productQty$', () => {
      expect(productAdded.qty).toEqual(productAddPayload.qty);
    });
  });

  describe('ngOnInit', () => {
    let scheduler: TestScheduler;

    beforeEach(() => {
      scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      addToCartNotification.ngOnInit();
    });

    it('should initialize open$', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(addToCartNotification.open$).toBe('a', { a: false });
      });
    });

    it('should initialize loading$', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(addToCartNotification.loading$).toBe('a', { a: false });
      });
    });

    it('should initialize productQty$', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(addToCartNotification.productQty$).toBe('a', { a: 0 });
      });
    });

    it('should initialize productId$', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(addToCartNotification.productId$).toBe('a', { a: null });
      });
    });

    it('should initialize product$', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(addToCartNotification.product$).toBe('a', { a: undefined });
      });
    });

    it('should return cartItemCount$', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(addToCartNotification.cartItemCount$).toBe('a', { a: 0 });
      });
    });
  });

  describe('when loading$ is false', () => {
    beforeEach(() => {
      store.dispatch(new OpenAddToCartNotification());
      store.dispatch(new DaffAddToCart(productAddPayload));
      store.dispatch(new DaffAddToCartSuccess(stubCart));

      fixture.detectChanges();
    });

    describe('when close button is clicked', () => {
      it('should call dispatch a CloseAddToCartNotification action', () => {
        spyOn(store, 'dispatch');
        fixture.debugElement.query(By.css('.demo-add-to-cart-notification__close')).nativeElement.click();
        expect(<any>store.dispatch).toHaveBeenCalledWith(new CloseAddToCartNotification());
      });
    });

    it('should render header', () => {
      const topBarElement = fixture.debugElement.query(By.css('.demo-add-to-cart-notification__header'));
      expect(topBarElement).not.toBeNull();
    });

    it('should render demo-product-added', () => {
      const productAddedElement = fixture.debugElement.query(By.css('.demo-add-to-cart-notification__product-added'));
      expect(productAddedElement).not.toBeNull();
    });

    it('should render button-set', () => {
      const buttonSetElement = fixture.debugElement.query(By.css('.demo-add-to-cart-notification__button-set'));
      expect(buttonSetElement).not.toBeNull();
    });

    it('should not render <daff-spinner>', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-spinner'));
      expect(loadingIcon).toBeNull();
    });
  });

  describe('when loading$ is true', () => {
    beforeEach(() => {
      store.dispatch(new OpenAddToCartNotification());
      store.dispatch(new DaffAddToCart(productAddPayload));
      fixture.detectChanges();
    });

    it('should not render header', () => {
      const topBarElement = fixture.debugElement.query(By.css('.demo-add-to-cart-notification__header'));

      expect(topBarElement).toBeNull();
    });

    it('should not render demo-product-added', () => {
      const productAddedElement = fixture.debugElement.query(By.css('.demo-add-to-cart-notification__product-added'));

      expect(productAddedElement).toBeNull();
    });

    it('should not render button-set', () => {
      const buttonSetElement = fixture.debugElement.query(By.css('.demo-add-to-cart-notification__button-set'));

      expect(buttonSetElement).toBeNull();
    });

    it('should render <daff-spinner>', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-spinner'));

      expect(loadingIcon).not.toBeNull();
    });
  });
});
