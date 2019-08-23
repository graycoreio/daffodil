import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { DaffProduct, DaffProductFacade } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffLoadingIconModule } from '@daffodil/design';

import { ProductViewComponent } from './product-view.component';
import { ActivatedRouteStub } from '../../../testing/ActivatedRouteStub';
import { AddToCartComponent } from '../../components/add-to-cart/add-to-cart.component';
import { ProductComponent } from '../../components/product/product.component';
import { hot, cold } from 'jasmine-marbles';


@Component({
  // tslint:disable-next-line: component-selector
  selector: '[cart-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'CartContainer'
})
class MockCartContainer {
  addToCart() { };
}

@Component({
  selector: 'demo-product',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
class MockProductComponent {
  @Input() product: DaffProduct;
  @Input() qty: number;
  @Output() updateQty: EventEmitter<any> = new EventEmitter();
}

@Component({ selector: 'demo-add-to-cart', template: '' })
class MockAddToCartComponent {
  @Input() additive: any;
  @Input() qty: number;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
}

@Component({ selector: 'demo-add-to-cart-notification', template: '' })
class MockAddToCartNotificationComponent { }

class MockDaffProductFacade {
  loading$: Observable<boolean> = new BehaviorSubject(false);
  product$: Observable<DaffProduct[]> = new BehaviorSubject(null);
  dispatch() { }
}

describe('ProductViewComponent', () => {
  const productFactory: DaffProductFactory = new DaffProductFactory();
  const mockProduct = productFactory.create();
  const idParam = '1001';
  const activatedRoute = new ActivatedRouteStub();

  let component: ProductViewComponent;
  let fixture: ComponentFixture<ProductViewComponent>;
  let cartContainer: MockCartContainer;
  let productComponent: ProductComponent;
  let addToCartComponent: AddToCartComponent;
  let addToCartNotification: MockAddToCartNotificationComponent;
  let facade: DaffProductFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffLoadingIconModule
      ],
      declarations: [
        ProductViewComponent,
        MockCartContainer,
        MockProductComponent,
        MockAddToCartComponent,
        MockAddToCartNotificationComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: DaffProductFacade, useClass: MockDaffProductFacade }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewComponent);
    component = fixture.componentInstance;
    activatedRoute.setParamMap({ id: idParam });
    facade = TestBed.get(DaffProductFacade);

    fixture.detectChanges();
    cartContainer = fixture.debugElement.query(By.css('[cart-container]')).componentInstance;

    productComponent = fixture.debugElement.query(By.css('demo-product')).componentInstance;
    addToCartComponent = fixture.debugElement.query(By.css('demo-add-to-cart')).componentInstance;
    addToCartNotification = fixture.debugElement.query(By.css('demo-add-to-cart-notification')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialize product$', () => {
      facade.product$ = hot('ab', { a: null, b: mockProduct });
      component.ngOnInit();
      const expected = cold('ab', { a: null, b: mockProduct });
      expect(component.product$).toBeObservable(expected);
    });

    it('should initialize loading$', () => {
      facade.loading$ = hot('ab', { a: false, b: true });
      component.ngOnInit();
      const expected = cold('ab', { a: false, b: true });
      expect(component.loading$).toBeObservable(expected);
    });

    it('should dispatch a  DaffProductLoad with an `id`', () => {
      spyOn(facade, 'dispatch');
      component.ngOnInit();
      expect(facade.dispatch).toHaveBeenCalled();
    });
  })

  describe('on <demo-product>', () => {
    it('should set product to current value of product$', () => {
      component.product$ = of(mockProduct);
      fixture.detectChanges();
      expect(productComponent.product).toEqual(mockProduct);
    });

    xit('should set qty to 1', () => {
      expect(productComponent.qty).toEqual(1);
    });

    xit('should set updateQty to call function passed by product-container directive', () => {

    });
  });

  describe('on <demo-add-to-cart>', () => {

    it('should set additive to product passed by product-container directive', () => {
      component.product$ = of(mockProduct);
      fixture.detectChanges();
      expect(addToCartComponent.additive).toEqual(mockProduct);
    });

    xit('should set qty to 1', () => {
      expect(addToCartComponent.qty).toEqual(1);
    });

    it('should set addToCart to call function passed by cart-container directive', () => {
      spyOn(cartContainer, 'addToCart');
      const payload = 'test';

      addToCartComponent.addToCart.emit(payload);

      expect(cartContainer.addToCart).toHaveBeenCalledWith(payload);
    });
  });

  describe('when loading$ is false', () => {
    beforeEach(() => {
      component.loading$ = of(false);
      fixture.detectChanges();
    });

    it('should render <demo-product>', () => {
      expect(productComponent).not.toBeNull();
    });

    it('should not render daff-loading-icon', () => {
      expect(fixture.debugElement.query(By.css('daff-loading-icon'))).toBeNull();
    });
  });

  describe('when loading$ is true', () => {
    let productElement;



    beforeEach(() => {
      component.loading$ = of(true);
      fixture.detectChanges();
      productElement = fixture.debugElement.query(By.css('demo-product'));
    });

    it('should  not render <demo-product>', () => {
      expect(productElement).toBeNull();
    });

    it('should render daff-loading-icon', () => {
      expect(fixture.debugElement.query(By.css('daff-loading-icon'))).not.toBeNull();
    });
  });
});
