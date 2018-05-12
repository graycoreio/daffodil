import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductFactory, Product } from '@daffodil/core';

import { ProductListComponent } from './product-list.component';
import { Component, Input } from '@angular/core';

let productFactory = new ProductFactory();
let mockProduct = productFactory.create();

@Component({template: '<product-list [products]="productsValue"></product-list>'})
class TestProductListWrapper {
  productsValue: Product[];
}

@Component({selector: 'product-card', template: ''})
class ProductCardMock {
  @Input() product: Product;
}

describe('ProductListComponent', () => {
  let component: TestProductListWrapper;
  let fixture: ComponentFixture<TestProductListWrapper>;
  let productFactory = new ProductFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductCardMock,
        ProductListComponent,
        TestProductListWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProductListWrapper);
    component = fixture.componentInstance;

    component.productsValue = new Array(productFactory.create(), productFactory.create());
    fixture.detectChanges();
  });

  it('should be able to take an input of products', () => {
    let productListComponent = fixture.debugElement.query(By.css('product-list'));

    expect(productListComponent.componentInstance.products).toEqual(component.productsValue);
  });

  describe('product-card', () => {

    let productCards;

    beforeEach(() => {
      productCards = fixture.debugElement.queryAll(By.css('product-card'));
    });

    it('renders a product-card for each product in products', () => {
      expect(productCards.length).toEqual(component.productsValue.length);
    });

    it('passes product down to product-card', () => {
      expect(productCards[0].componentInstance.product).toEqual(component.productsValue[0]);
    });
  });
});
