import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffCartItemInputType } from '@daffodil/cart';
import { DaffCartItemAdd } from '@daffodil/cart/state';
import {
  DaffCartStateTestingModule,
  MockDaffCartFacade,
} from '@daffodil/cart/state/testing';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';
import { DaffProduct } from '@daffodil/product';
import { DaffProductLoad } from '@daffodil/product/state';
import {
  DaffProductStateTestingModule,
  MockDaffProductPageFacade,
} from '@daffodil/product/state/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { ProductViewComponent } from './product-view.component';
import { ActivatedRouteStub } from '../../../testing/ActivatedRouteStub';
import { AddToCartComponent } from '../../components/add-to-cart/add-to-cart.component';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'demo-product',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
class MockProductComponent {
  @Input() product: DaffProduct;
  @Input() qty: number;
  @Output() updateQty: EventEmitter<any> = new EventEmitter();
}

@Component({
  selector: 'demo-add-to-cart', template: '',
  standalone: false,
})
class MockAddToCartComponent {
  @Input() additive: any;
  @Input() qty: number;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
}

describe('ProductViewComponent', () => {
  let productFactory: DaffProductFactory;
  let mockProduct;
  const idParam = '1001';
  const activatedRoute = new ActivatedRouteStub();

  let component: ProductViewComponent;
  let fixture: ComponentFixture<ProductViewComponent>;
  let cartFacade: MockDaffCartFacade;
  let productComponent: ProductComponent;
  let addToCartComponent: AddToCartComponent;
  let facade: MockDaffProductPageFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffLoadingIconModule,
        DaffCartStateTestingModule,
        DaffProductStateTestingModule,
      ],
      declarations: [
        ProductViewComponent,
        MockProductComponent,
        MockAddToCartComponent,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    facade = TestBed.inject(MockDaffProductPageFacade);
    cartFacade = TestBed.inject(MockDaffCartFacade);
    productFactory = TestBed.inject(DaffProductFactory);

    mockProduct = productFactory.create();

    fixture = TestBed.createComponent(ProductViewComponent);
    component = fixture.componentInstance;
    activatedRoute.setParamMap({ id: idParam });

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
      expect(facade.dispatch).toHaveBeenCalledWith(new DaffProductLoad(idParam));
    });

    it('should only ever dispatch a DaffProductLoad once per initialization', () => {
      spyOn(facade, 'dispatch');
      component.ngOnInit();
      activatedRoute.setParamMap({ id: '12312313' });
      activatedRoute.setParamMap({ id: '12311' });
      expect(facade.dispatch).toHaveBeenCalledTimes(1);
    });
  });

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
        qty: 1,
        type: DaffCartItemInputType.Simple,
      };

      addToCartComponent.addToCart.emit(payload);

      expect(cartFacade.dispatch).toHaveBeenCalledWith(new DaffCartItemAdd(payload));
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
