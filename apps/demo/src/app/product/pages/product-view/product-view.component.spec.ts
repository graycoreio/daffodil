import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { DaffAddToCart } from '@daffodil/cart/state';
import { DaffCartTestingModule, MockDaffCartFacade } from '@daffodil/cart/state/testing';
import { DaffProduct, DaffProductLoad } from '@daffodil/product';
import { DaffProductFactory, DaffProductTestingModule, MockDaffProductFacade } from '@daffodil/product/testing';
import { DaffLoadingIconModule } from '@daffodil/design';

import { ProductViewComponent } from './product-view.component';
import { ActivatedRouteStub } from '../../../testing/ActivatedRouteStub';
import { AddToCartComponent } from '../../components/add-to-cart/add-to-cart.component';
import { ProductComponent } from '../../components/product/product.component';

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

describe('ProductViewComponent', () => {
  const productFactory: DaffProductFactory = new DaffProductFactory();
  const mockProduct = productFactory.create();
  const idParam = '1001';
  const activatedRoute = new ActivatedRouteStub();

  let component: ProductViewComponent;
  let fixture: ComponentFixture<ProductViewComponent>;
  let cartFacade: MockDaffCartFacade;
  let productComponent: ProductComponent;
  let addToCartComponent: AddToCartComponent;
  let facade: MockDaffProductFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffLoadingIconModule,
        DaffCartTestingModule,
        DaffProductTestingModule
      ],
      declarations: [
        ProductViewComponent,
        MockProductComponent,
        MockAddToCartComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewComponent);
    component = fixture.componentInstance;
    activatedRoute.setParamMap({ id: idParam });
		facade = TestBed.inject(MockDaffProductFacade);
		cartFacade = TestBed.inject(MockDaffCartFacade);

    fixture.detectChanges();

    productComponent = fixture.debugElement.query(By.css('demo-product')).componentInstance;
    addToCartComponent = fixture.debugElement.query(By.css('demo-add-to-cart')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should dispatch a DaffProductLoad with an `id`', () => {
      spyOn(facade, 'dispatch');
      component.ngOnInit();
      expect(facade.dispatch).toHaveBeenCalledWith(new DaffProductLoad(idParam))
    });

    it('should only ever dispatch a DaffProductLoad once per initialization', () => {
      spyOn(facade, 'dispatch');
      component.ngOnInit();
      activatedRoute.setParamMap({ id: '12312313' });
      activatedRoute.setParamMap({ id: '12311' });
      expect(facade.dispatch).toHaveBeenCalledTimes(1);
    });
  })

  describe('on <demo-product>', () => {
    it('should set product to current value of product$', () => {
      facade.product$.next(mockProduct);
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
      facade.product$.next(mockProduct);
      fixture.detectChanges();
      expect(addToCartComponent.additive).toEqual(mockProduct);
    });

    xit('should set qty to 1', () => {
      expect(addToCartComponent.qty).toEqual(1);
    });

    it('should set addToCart to call function passed by cart-container directive', () => {
      spyOn(cartFacade, 'dispatch');
      const payload = {
				productId: 'id',
				qty: 1
			};

      addToCartComponent.addToCart.emit(payload);

      expect(cartFacade.dispatch).toHaveBeenCalledWith(new DaffAddToCart(payload));
    });
  });

  describe('when loading$ is false', () => {
    beforeEach(() => {
      facade.loading$.next(false);
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
      facade.loading$.next(true);
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
