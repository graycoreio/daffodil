import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProductViewComponent } from './product-view.component';

import { Product } from '@daffodil/core';
import { ProductFactory } from '@daffodil/core';

let productFactory = new ProductFactory();
let product$ = of(productFactory.create());

@Component({
  selector: '[product-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'ProductContainer'
})
class ProductContainerMock {
  product$: Observable<Product> = product$;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductViewComponent,
        ProductContainerMock,
        ProductMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <product></product>', () => {
    
    it('should set product to value passed by product-container directive', () => {
      let productComponent = fixture.debugElement.query(By.css('product'));
      
      product$.subscribe((product) => {
        expect(productComponent.componentInstance.product).toEqual(product);
      });
    });
  });
});
