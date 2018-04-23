import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProductListViewComponent } from './product-list-view.component';

import { Product } from '@daffodil/core/product//model/product';
import { ProductFactory } from '@daffodil/core/product/testing/factories/product.factory';

let productFactory = new ProductFactory();
let products$ = of(new Array(productFactory.create()));

@Component({
  selector: '[product-list-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'ProductListContainer'
})
class ProductListContainerMock {
  products$: Observable<Product[]> = products$;
}

@Component({
  selector: 'product-list',
  template: ''
})
class ProductListMock { 
  @Input() products: Product[];
}

describe('ProductListViewComponent', () => {
  let component: ProductListViewComponent;
  let fixture: ComponentFixture<ProductListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductListViewComponent,
        ProductListContainerMock,
        ProductListMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on product-list', () => {
    
    it('should set products to value passed by product-list-container directive', () => {
      let productList = fixture.debugElement.query(By.css('product-list'));
      
      products$.subscribe((products) => {
        expect(productList.componentInstance.products).toEqual(products);
      });
    });
  });
});
