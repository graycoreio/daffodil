import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductFactory, Product } from '@daffodil/core';

import { ProductGridComponent } from './product-grid.component';
import { Component, Input } from '@angular/core';

@Component({template: '<product-grid [products]="productsValue"></product-grid>'})
class TestProductGridWrapper {
  productsValue: Product[];
}

@Component({selector: 'product-card', template: ''})
class ProductCardMock {
  @Input() product: Product;
}

describe('ProductGridComponent', () => {
  let component: TestProductGridWrapper;
  let fixture: ComponentFixture<TestProductGridWrapper>;
  let productFactory = new ProductFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductCardMock,
        ProductGridComponent,
        TestProductGridWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProductGridWrapper);
    component = fixture.componentInstance;

    component.productsValue = new Array(productFactory.create(), productFactory.create());
    fixture.detectChanges();
  });

  it('should be able to take an input of products', () => {
    let productGridComponent = fixture.debugElement.query(By.css('product-grid'));

    expect(productGridComponent.componentInstance.products).toEqual(component.productsValue);
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
