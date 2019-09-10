import { Component, Input, Output, EventEmitter, Directive, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { cold } from 'jasmine-marbles';
import { StoreModule, combineReducers, Store } from '@ngrx/store';

import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffProduct, fromProduct, DaffProductLoadSuccess } from '@daffodil/product';
import { DaffLoadingIconModule, DaffModalModule } from '@daffodil/design';
import { fromCart, DaffAddToCart, DaffAddToCartSuccess } from '@daffodil/cart';

import { AddToCartNotificationComponent } from './add-to-cart-notification.component';
import * as fromAddToCartNotification from '../../reducers/index';
import { CloseAddToCartNotification, OpenAddToCartNotification } from '../../actions/add-to-cart-notification.actions';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({ template: '<demo-add-to-cart-notification [verticalPosition]="verticalPositionValue" [horizontalPosition]="horizontalPositionValue"></demo-add-to-cart-notification>' })
class WrapperComponent {
  productValue: DaffProduct;
  verticalPositionValue = "bottom";
  horizontalPositionValue = "left";
}

// tslint:disable-next-line: component-selector
@Component({ selector: 'daff-modal', template: '<ng-content></ng-content>' })
class MockDaffModalComponent {
  @Input() show: boolean;
  @Input() verticalPosition: string;
  @Input() horizontalPosition: string;
  @Output() hide: EventEmitter<any> = new EventEmitter();
}

@Component({ selector: 'demo-product-added', template: '' })
class MockProductAddedComponent {
  @Input() product: DaffProduct;
  @Input() qty: number;
}

describe('AddToCartNotificationComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let store: Store<{
    demoAddToCartNotification: fromAddToCartNotification.State,
    cart: fromCart.State
    product: fromProduct.State
  }>;
  const productFactory: DaffProductFactory = new DaffProductFactory();
  const cartFactory: DaffCartFactory = new DaffCartFactory();

  let daffModal: MockDaffModalComponent;
  let addToCartNotification: AddToCartNotificationComponent;
  let productAdded: MockProductAddedComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          demoAddToCartNotification: combineReducers(fromAddToCartNotification.reducers),
          cart: combineReducers(fromCart.reducers),
          product: combineReducers(fromProduct.reducers)
        }),
        NoopAnimationsModule,
        DaffLoadingIconModule,
        DaffModalModule
      ],
      declarations: [
        WrapperComponent,
        AddToCartNotificationComponent,
        MockProductAddedComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    store = TestBed.get(Store);

    fixture.detectChanges();

    daffModal = fixture.debugElement.query(By.css('daff-modal')).componentInstance;
    addToCartNotification = fixture.debugElement.query(By.css('demo-add-to-cart-notification')).componentInstance;
  });


  it('should create', () => {
    expect(addToCartNotification).toBeTruthy();
  });

  describe('on <daff-modal>', () => {

    it('should set verticalPosition', () => {
      expect(daffModal.verticalPosition).toEqual(addToCartNotification._verticalPosition);
    });

    it('should set horizontalPosition', () => {
      expect(daffModal.horizontalPosition).toEqual(addToCartNotification._horizontalPosition);
    });

    it('should set show', () => {
      expect(daffModal.show).toEqual(false);
    });
  });

  describe('on demo-product-added', () => {
    const stubProduct = productFactory.create(1);
    const productAddPayload = { productId: stubProduct.id, qty: 1 };
    const stubCart = cartFactory.create();

    beforeEach(() => {
      store.dispatch(new DaffProductLoadSuccess(stubProduct))
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

  it('should be able to take verticalPosition as input', () => {
    expect(addToCartNotification.verticalPosition).toEqual(wrapper.verticalPositionValue);
  });

  it('should be able to take horizontalPosition as input', () => {
    expect(addToCartNotification.horizontalPosition).toEqual(wrapper.horizontalPositionValue);
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

  describe('when daff-modal emits hide', () => {
    it('should call dispatch a CloseAddToCartNotification action', () => {
      spyOn(store, 'dispatch');
      daffModal.hide.emit();
      expect(store.dispatch).toHaveBeenCalledWith(new CloseAddToCartNotification());
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

    describe('when time-icon is clicked', () => {
      it('should call dispatch a CloseAddToCartNotification action', () => {
        spyOn(store, 'dispatch');
        fixture.debugElement.query(By.css('.fa-times')).nativeElement.click();
        expect(store.dispatch).toHaveBeenCalledWith(new CloseAddToCartNotification());
      });
    });

    it('should render header', () => {
      const topBarElement = fixture.debugElement.query(By.css('.add-to-cart-notification__header'));
      expect(topBarElement).not.toBeNull();
    });

    it('should render demo-product-added', () => {
      const productAddedElement = fixture.debugElement.query(By.css('.add-to-cart-notification__product-added'));
      expect(productAddedElement).not.toBeNull();
    });

    it('should render button-set', () => {
      const buttonSetElement = fixture.debugElement.query(By.css('.add-to-cart-notification__button-set'));
      expect(buttonSetElement).not.toBeNull();
    });

    it('should not render <daff-loading-icon>', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));
      expect(loadingIcon).toBeNull();
    });

    describe('when [demoViewCart] is clicked', () => {
      it('should call dispatch a CloseAddToCartNotification action', () => {
        spyOn(store, 'dispatch');
        fixture.debugElement.query(By.css('[demoViewCart]')).nativeElement.click();
        expect(store.dispatch).toHaveBeenCalledWith(new CloseAddToCartNotification());
      });
    });
  
    describe('when [demoProceedToCheckout] is clicked', () => {
      it('should call dispatch a CloseAddToCartNotification action', () => {
        spyOn(store, 'dispatch');
        fixture.debugElement.query(By.css('[demoProceedToCheckout]')).nativeElement.click();
        expect(store.dispatch).toHaveBeenCalledWith(new CloseAddToCartNotification());
      });
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
      const topBarElement = fixture.debugElement.query(By.css('.add-to-cart-notification__header'));

      expect(topBarElement).toBeNull();
    });

    it('should not render demo-product-added', () => {
      const productAddedElement = fixture.debugElement.query(By.css('.add-to-cart-notification__product-added'));

      expect(productAddedElement).toBeNull();
    });

    it('should not render button-set', () => {
      const buttonSetElement = fixture.debugElement.query(By.css('.add-to-cart-notification__button-set'));

      expect(buttonSetElement).toBeNull();
    });

    it('should render <daff-loading-icon>', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));

      expect(loadingIcon).not.toBeNull();
    });
  });
});
