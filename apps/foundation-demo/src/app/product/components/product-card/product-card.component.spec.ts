import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { Component } from '@angular/core';
import { Product, ProductFactory } from '@daffodil/core';
import { By } from '@angular/platform-browser';

let productFactory = new ProductFactory();
let mockProduct = productFactory.create();

@Component({template: '<product-card [product]="productValue"></product-card>'})
class TestProductCardWrapper {
  productValue: Product;
}

describe('ProductCardComponent', () => {
  let component: TestProductCardWrapper;
  let fixture: ComponentFixture<TestProductCardWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductCardComponent,
        TestProductCardWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProductCardWrapper);
    component = fixture.componentInstance;
    component.productValue = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take a product as input', () => {
    let productCardComponent = fixture.debugElement.query(By.css('product-card'));

    expect(productCardComponent.componentInstance.product).toEqual(mockProduct);
  });
});
