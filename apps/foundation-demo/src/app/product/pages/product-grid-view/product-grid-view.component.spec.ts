import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product, ProductFactory } from '@daffodil/core';

import { ProductGridViewComponent } from './product-grid-view.component';

let productFactory = new ProductFactory();
let products$ = of(new Array(productFactory.create()));

@Component({
  selector: '[product-grid-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'ProductGridContainer'
})
class MockProductGridContainer {
  products$: Observable<Product[]> = products$;
}

@Component({
  selector: 'product-grid',
  template: ''
})
class MockProductGridComponent { 
  @Input() products: Product[];
}

describe('ProductGridViewComponent', () => {
  let component: ProductGridViewComponent;
  let fixture: ComponentFixture<ProductGridViewComponent>;
  let productGridComponent: MockProductGridComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductGridViewComponent,
        MockProductGridContainer,
        MockProductGridComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridViewComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    productGridComponent = fixture.debugElement.query(By.css('product-grid')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <product-grid>', () => {
    
    it('should set products to value passed by [product-grid-container]', () => {
      products$.subscribe((products) => {
        expect(productGridComponent.products).toEqual(products);
      });
    });
  });
});
