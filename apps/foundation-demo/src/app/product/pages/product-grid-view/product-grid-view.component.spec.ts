import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProductGridViewComponent } from './product-grid-view.component';

import { Product } from '@daffodil/state';
import { ProductFactory } from '@daffodil/state';

let productFactory = new ProductFactory();
let products$ = of(new Array(productFactory.create()));

@Component({
  selector: '[product-grid-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'ProductGridContainer'
})
class ProductGridContainerMock {
  products$: Observable<Product[]> = products$;
}

@Component({
  selector: 'product-grid',
  template: ''
})
class ProductGridMock { 
  @Input() products: Product[];
}

describe('ProductGridViewComponent', () => {
  let component: ProductGridViewComponent;
  let fixture: ComponentFixture<ProductGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductGridViewComponent,
        ProductGridContainerMock,
        ProductGridMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on product-grid', () => {
    
    it('should set products to value passed by product-grid-container directive', () => {
      let productGrid = fixture.debugElement.query(By.css('product-grid'));
      
      products$.subscribe((products) => {
        expect(productGrid.componentInstance.products).toEqual(products);
      });
    });
  });
});
