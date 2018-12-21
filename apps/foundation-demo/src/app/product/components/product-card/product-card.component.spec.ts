import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { Product } from '@daffodil/core';
import { DaffProductFactory, DaffProductImageFactory } from '@daffodil/core/testing';

import { ProductCardComponent } from './product-card.component';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

@Component({template: '<demo-product-card [product]="productValue"></demo-product-card>'})
class TestProductCardWrapper {
  productValue: Product;
}

describe('ProductCardComponent', () => {
  let component: TestProductCardWrapper;
  let fixture: ComponentFixture<TestProductCardWrapper>;
  let router;
  let productCardComponent;
  let productImageFactory: DaffProductImageFactory;
  let productFactory: DaffProductFactory;
  let stubProduct: Product;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffDriverTestingModule
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
    productImageFactory = TestBed.get(DaffProductImageFactory);
    productFactory = TestBed.get(DaffProductFactory);

    let stubProductImages = productImageFactory.createMany(5);
    stubProduct = productFactory.create({images: stubProductImages});

    component.productValue = stubProduct;
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    fixture.detectChanges();

    productCardComponent = fixture.debugElement.query(By.css('demo-product-card'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take a product as input', () => {
    expect(productCardComponent.componentInstance.product).toEqual(stubProduct);
  });

  describe('when product-card is clicked', () => {

    beforeEach(() => {
      fixture.debugElement.query(By.css('.product-card')).nativeElement.click();
    });
    
    it('should call router.navigateByUrl', () => {
      expect(productCardComponent.componentInstance.router.navigateByUrl).toHaveBeenCalledWith('product/' + stubProduct.id);
    });
  });
});
