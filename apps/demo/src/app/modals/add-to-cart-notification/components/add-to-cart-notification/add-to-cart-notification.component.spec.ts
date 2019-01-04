import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { Component, Input, Output, EventEmitter, Directive } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffDriverTestingModule } from '@daffodil/driver/testing';
import { DaffProductFactory } from '@daffodil/core/testing';
import { Product } from '@daffodil/core';
import { DaffLoadingIconModule } from '@daffodil/design';

// importing from @daffodil/state doesn't work.
import * as fromProduct from 'libs/state/src/product/reducers/index';

import { AddToCartNotificationComponent } from './add-to-cart-notification.component';
import * as fromAddToCartNotification from '../../reducers/index';
import { CloseAddToCartNotification } from '../../actions/add-to-cart-notification.actions';
import { of } from 'rxjs';

const stubOpen = true;
const stubProductQty = 1;
const stubLoading = false;
const stubCartItemCount = 2;

@Component({ template: '<demo-add-to-cart-notification [verticalPosition]="verticalPositionValue" [horizontalPosition]="horizontalPositionValue"></demo-add-to-cart-notification>'})
class WrapperComponent {
  productValue: Product;
  verticalPositionValue = "bottom";
  horizontalPositionValue = "left";
}

// tslint:disable-next-line: component-selector
@Component({ selector: 'daff-modal', template: '<ng-content></ng-content>'})
class MockDaffModalComponent {
  @Input() show: boolean;
  @Input() verticalPosition: string;
  @Input() horizontalPosition: string;
  @Output() hide: EventEmitter<any> = new EventEmitter();
}

@Directive({ selector: '[demoViewCart]'})
class MockViewCartDirective {}

@Directive({ selector: '[demoProceedToCheckout]'})
class MockProceedToCheckoutDirective {}

@Component({ selector: 'demo-modal-portal', template: '<ng-content></ng-content>'})
class MockModalPortalComponent {}

@Component({ selector: 'demo-product-added', template: ''})
class MockProductAddedComponent {
  @Input() product: Product;
  @Input() qty: number;
}

describe('AddToCartNotificationComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let store;
  let productFactory: DaffProductFactory;
  let stubProduct: Product;
  let stubProductId: string;
  let daffModal: MockDaffModalComponent;
  let addToCartNotification: AddToCartNotificationComponent;
  let productAdded: MockProductAddedComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationCheckout: combineReducers(fromAddToCartNotification.reducers)
        }),
        StoreModule.forRoot({
          product: combineReducers(fromProduct.reducers)
        }),
        DaffDriverTestingModule,
        DaffLoadingIconModule
      ],
      declarations: [
        WrapperComponent,
        AddToCartNotificationComponent,
        MockDaffModalComponent,
        MockViewCartDirective,
        MockProceedToCheckoutDirective,
        MockModalPortalComponent,
        MockProductAddedComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    store = TestBed.get(Store);
    productFactory = TestBed.get(DaffProductFactory);
    stubProduct = productFactory.create();
    stubProductId = stubProduct.id;
    spyOn(store, 'dispatch');
    spyOn(fromAddToCartNotification, 'selectOpen').and.returnValue(stubOpen);
    spyOn(fromAddToCartNotification, 'selectProductQty').and.returnValue(stubProductQty);
    spyOn(fromAddToCartNotification, 'selectLoading').and.returnValue(stubLoading);
    spyOn(fromAddToCartNotification, 'selectProductId').and.returnValue(stubProductId);
    spyOn(fromAddToCartNotification, 'selectCartItemCount').and.returnValue(stubCartItemCount);
    // todo this doesn't seem to actually mock this selector.
    // spyOn(fromProduct, 'selectProduct').and.returnValue(stubProduct);

    fixture.detectChanges();
    
    daffModal = fixture.debugElement.query(By.css('daff-modal')).componentInstance;
    addToCartNotification = fixture.debugElement.query(By.css('demo-add-to-cart-notification')).componentInstance;
    productAdded = fixture.debugElement.query(By.css('demo-product-added')).componentInstance;
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
      expect(daffModal.show).toEqual(stubOpen);
    });
  });

  describe('on demo-product-added', () => {
    
    it('should set product', () => {
      addToCartNotification.product$ = of(stubProduct);
      fixture.detectChanges();

      expect(productAdded.product).toEqual(stubProduct);
    });

    it('should set qty to productQty$', () => {
      expect(productAdded.qty).toEqual(stubProductQty);
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
      addToCartNotification.open$.subscribe((open) => {
        expect(open).toEqual(stubOpen);
      });
    });

    it('should initialize loading$', () => {
      addToCartNotification.loading$.subscribe((loading) => {
        expect(loading).toEqual(stubLoading);
      })
    });

    it('should initialize productQty$', () => {
      addToCartNotification.productQty$.subscribe((productQty) => {
        expect(productQty).toEqual(stubProductQty);
      });
    });

    it('should initialize productId$', () => {
      addToCartNotification.productId$.subscribe((productId) => {
        expect(productId).toEqual(stubProductId);
      });
    });

    xit('should initialize product$', () => {
      // Not sure how to test this. I think the issue is that spying on a selector that takes parameters doesn't seem to work.
    });
  });

  describe('cartItemCount$', () => {
    
    it('should return cartItemCount', () => {
      addToCartNotification.cartItemCount$.subscribe((cartItemCount) => {
        expect(cartItemCount).toEqual(stubCartItemCount);
      });
    });
  });

  describe('when daff-modal emits hide', () => {
    
    it('should call dispatch a CloseAddToCartNotification action', () => {
      daffModal.hide.emit();

      expect(store.dispatch).toHaveBeenCalledWith(new CloseAddToCartNotification());
    });
  });

  describe('when [demoViewCart] is clicked', () => {
    
    it('should call dispatch a CloseAddToCartNotification action', () => {
      fixture.debugElement.query(By.css('[demoViewCart]')).nativeElement.click();

      expect(store.dispatch).toHaveBeenCalledWith(new CloseAddToCartNotification());
    });
  });

  describe('when [demoProceedToCheckout] is clicked', () => {
    
    it('should call dispatch a CloseAddToCartNotification action', () => {
      fixture.debugElement.query(By.css('[demoProceedToCheckout]')).nativeElement.click();
      
      expect(store.dispatch).toHaveBeenCalledWith(new CloseAddToCartNotification());
    });
  });

  describe('when time-icon is clicked', () => {
    
    it('should call dispatch a CloseAddToCartNotification action', () => {
      fixture.debugElement.query(By.css('.fa-times')).nativeElement.click();
      
      expect(store.dispatch).toHaveBeenCalledWith(new CloseAddToCartNotification());
    });
  });

  describe('when loading$ is false', () => {

    beforeEach(() => {
      addToCartNotification.loading$ = of(false);
      fixture.detectChanges();
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
  });

  describe('when loading$ is true', () => {

    beforeEach(() => {
      addToCartNotification.loading$ = of(true);
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
