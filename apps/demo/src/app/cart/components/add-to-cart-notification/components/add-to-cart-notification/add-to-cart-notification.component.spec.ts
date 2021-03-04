import {
  Component,
  Input,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffAddToCart,
  DaffAddToCartSuccess,
  DaffCartReducersState,
  daffCartReducers,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffLoadingIconModule } from '@daffodil/design';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductLoadSuccess,
  DaffProductReducersState,
  daffProductReducers,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import {
  CloseAddToCartNotification,
  OpenAddToCartNotification,
} from '../../actions/add-to-cart-notification.actions';
import * as fromAddToCartNotification from '../../reducers/index';
import { AddToCartNotificationComponent } from './add-to-cart-notification.component';

@Component({ template: '<demo-add-to-cart-notification></demo-add-to-cart-notification>' })
class WrapperComponent {}

@Component({ selector: 'demo-product-added', template: '' })
class MockProductAddedComponent {
  @Input() product: DaffProduct;
  @Input() qty: number;
}

describe('AddToCartNotificationComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let store: Store<{
    demoAddToCartNotification: fromAddToCartNotification.State;
    cart: DaffCartReducersState;
    product: DaffProductReducersState<DaffProduct>;
  }>;
  const productFactory: DaffProductFactory = new DaffProductFactory();
  const cartFactory: DaffCartFactory = new DaffCartFactory();

  let addToCartNotification: AddToCartNotificationComponent;
  let productAdded: MockProductAddedComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          demoAddToCartNotification: combineReducers(fromAddToCartNotification.reducers),
          cart: combineReducers(daffCartReducers),
          product: combineReducers(daffProductReducers),
        }),
        NoopAnimationsModule,
        DaffLoadingIconModule,
        FontAwesomeModule,
      ],
      declarations: [
        WrapperComponent,
        AddToCartNotificationComponent,
        MockProductAddedComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();

    addToCartNotification = fixture.debugElement.query(By.css('demo-add-to-cart-notification')).componentInstance;
  });


  it('should create', () => {
    expect(addToCartNotification).toBeTruthy();
  });

  describe('on demo-product-added', () => {
    const stubProduct = productFactory.create(1);
    const productAddPayload = { productId: stubProduct.id, qty: 1 };
    const stubCart = cartFactory.create();

    beforeEach(() => {
      store.dispatch(new DaffProductLoadSuccess(stubProduct));
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

    beforeEach(() => {
      addToCartNotification.ngOnInit();
    });

    it('should initialize open$', () => {
      const expected = cold('a', { a: false });

      expect(addToCartNotification.open$).toBeObservable(expected);
    });

    it('should initialize loading$', () => {
      const expected = cold('a', { a: false });

      expect(addToCartNotification.loading$).toBeObservable(expected);
    });

    it('should initialize productQty$', () => {
      const expected = cold('a', { a: 0 });
      expect(addToCartNotification.productQty$).toBeObservable(expected);
    });

    it('should initialize productId$', () => {
      const expected = cold('a', { a: null });
      expect(addToCartNotification.productId$).toBeObservable(expected);
    });

    it('should initialize product$', () => {
      const expected = cold('a', { a: undefined });
      expect(addToCartNotification.product$).toBeObservable(expected);
    });

    it('should return cartItemCount$', () => {
      const expected = cold('a', { a: 0 });
      expect(addToCartNotification.cartItemCount$).toBeObservable(expected);
    });
  });

  describe('when loading$ is false', () => {
    const stubProduct = productFactory.create(1);
    const productAddPayload = { productId: stubProduct.id, qty: 1 };
    const stubCart = cartFactory.create();

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
        expect(store.dispatch).toHaveBeenCalledWith(new CloseAddToCartNotification());
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

    it('should not render <daff-loading-icon>', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));
      expect(loadingIcon).toBeNull();
    });
  });

  describe('when loading$ is true', () => {
    const stubProduct = productFactory.create(1);
    const productAddPayload = { productId: stubProduct.id, qty: 1 };

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

    it('should render <daff-loading-icon>', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));

      expect(loadingIcon).not.toBeNull();
    });
  });
});
