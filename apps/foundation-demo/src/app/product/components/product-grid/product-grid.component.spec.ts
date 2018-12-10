import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

import { Product } from '@daffodil/core';
import { DaffProductFactory } from '@daffodil/core/testing';

import { ProductGridComponent } from './product-grid.component';

@Component({template: '<product-grid [products]="productsValue"></product-grid>'})
class TestProductGridWrapper {
  productsValue: Product[];
}

@Component({selector: 'product-card', template: ''})
class MockProductCardComponent {
  @Input() product: Product;
}

describe('ProductGridComponent', () => {
  let component: TestProductGridWrapper;
  let fixture: ComponentFixture<TestProductGridWrapper>;
  let productFactory: DaffProductFactory = new DaffProductFactory();
  let productCards;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockProductCardComponent,
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

    productCards = fixture.debugElement.queryAll(By.css('product-card'));
  });

  it('should be able to take an input of products', () => {
    let productGridComponent = fixture.debugElement.query(By.css('product-grid'));

    expect(productGridComponent.componentInstance.products).toEqual(component.productsValue);
  });

  describe('on <product-card>', () => {

    it('should set product', () => {
      expect(productCards[0].componentInstance.product).toEqual(component.productsValue[0]);
    });
  });

  it('renders a product-card for each product in products', () => {
    expect(productCards.length).toEqual(component.productsValue.length);
  });
});
