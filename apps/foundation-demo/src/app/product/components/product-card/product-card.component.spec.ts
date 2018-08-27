import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { Product } from '@daffodil/core';
import { ProductFactory } from '@daffodil/core/testing';

import { ProductCardComponent } from './product-card.component';

let productFactory: ProductFactory = new ProductFactory();
let mockProduct = productFactory.create();

@Component({template: '<product-card [product]="productValue"></product-card>'})
class TestProductCardWrapper {
  productValue: Product;
}

describe('ProductCardComponent', () => {
  let component: TestProductCardWrapper;
  let fixture: ComponentFixture<TestProductCardWrapper>;
  let router;
  let productCardComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
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
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    fixture.detectChanges();

    productCardComponent = fixture.debugElement.query(By.css('product-card'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take a product as input', () => {
    expect(productCardComponent.componentInstance.product).toEqual(mockProduct);
  });

  describe('when product-card is clicked', () => {

    beforeEach(() => {
      fixture.debugElement.query(By.css('.product-card')).nativeElement.click();
    });
    
    it('should call router.navigateByUrl', () => {
      expect(productCardComponent.componentInstance.router.navigateByUrl).toHaveBeenCalledWith('product/' + mockProduct.id);
    });
  });
});
