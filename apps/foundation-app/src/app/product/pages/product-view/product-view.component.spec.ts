import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProductViewComponent } from './product-view.component';

import { Product } from '@daffodil/core';
import { ProductFactory } from '@daffodil/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteStub } from '../../../testing/ActivatedRouteStub';

let productFactory = new ProductFactory();
let mockProduct = productFactory.create();
let product$ = of(mockProduct);

@Component({
  selector: '[product-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'ProductContainer'
})
class ProductContainerMock {
  @Input() selectedProductId: string;

  product$: Observable<Product> = product$;
  loading$: Observable<boolean> = of(false);
}

@Component({
  selector: 'product',
  template: ''
})
class ProductMock { 
  @Input() product: Product;
}

describe('ProductViewComponent', () => {
  let component: ProductViewComponent;
  let fixture: ComponentFixture<ProductViewComponent>;
  let route: ActivatedRoute;
  let idParam: string;
  let activatedRoute = new ActivatedRouteStub();
  let productContainer;
  let productComponent;

  beforeEach(async(() => {
    idParam = '1001';
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        ProductViewComponent,
        ProductContainerMock,
        ProductMock
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewComponent);
    component = fixture.componentInstance;
    activatedRoute.setParamMap({ id: idParam });

    productContainer = fixture.debugElement.query(By.css('[product-container]'));
    productContainer.componentInstance.loading$ = of(false);

    fixture.detectChanges();
    productComponent = fixture.debugElement.query(By.css('product'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set productId from id param', () => {
    expect(component.productId).toEqual(idParam);
  });

  describe('on ProductContainer', () => {
    
    it('should set selectedProductId', () => {
      expect(productContainer.componentInstance.selectedProductId).toEqual(idParam);
    });
  });

  describe('on <product></product>', () => {
    
    it('should set product to value passed by product-container directive', () => {
      expect(productComponent.componentInstance.product).toEqual(mockProduct);
    });
  });

  describe('when loading$ is false', () => {
    
    it('should render <product>', () => {
      expect(productComponent).not.toBeNull();
    });

    it('should not render the loading spinner', () => {
      expect(fixture.debugElement.query(By.css('.cart-container__loading-icon'))).toBeNull();
    });
  });

  describe('when loading$ is true', () => {
    
    beforeEach(() => {
      productContainer.componentInstance.loading$ = of(true);
      fixture.detectChanges();
      productComponent = fixture.debugElement.query(By.css('product'));
    });

    it('should  not render <product>', () => {
      expect(productComponent).toBeNull();
    });

    it('should render the loading spinner', () => {
      expect(fixture.debugElement.query(By.css('.cart-container__loading-icon'))).not.toBeNull();
    });
  });
});
