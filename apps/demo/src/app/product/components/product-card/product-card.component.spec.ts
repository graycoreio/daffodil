import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { Product } from '@daffodil/core';
import { DaffProductFactory, DaffProductImageFactory } from '@daffodil/core/testing';

import { ProductCardComponent } from './product-card.component';

@Component({template: '<demo-product-card [product]="productValue"></demo-product-card>'})
class WrapperComponent {
  productValue: Product;
}

describe('ProductCardComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let router;
  let productCardComponent;
  let productImageFactory: DaffProductImageFactory;
  let productFactory: DaffProductFactory;
  let stubProduct: Product;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        ProductCardComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    productImageFactory = TestBed.get(DaffProductImageFactory);
    productFactory = TestBed.get(DaffProductFactory);

    const stubProductImages = productImageFactory.createMany(5);
    stubProduct = productFactory.create({images: stubProductImages});

    wrapper.productValue = stubProduct;
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    fixture.detectChanges();

    productCardComponent = fixture.debugElement.query(By.css('demo-product-card'));
  });

  it('should create', () => {
    expect(productCardComponent).toBeTruthy();
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
