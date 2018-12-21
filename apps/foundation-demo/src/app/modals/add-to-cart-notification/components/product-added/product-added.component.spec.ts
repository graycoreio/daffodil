import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Product } from '@daffodil/core';
import { DaffProductFactory, DaffProductImageFactory } from '@daffodil/core/testing';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

import { ProductAddedComponent } from './product-added.component';

let stubQty = 1;

@Component({
  template: '<demo-product-added [qty]="qtyValue" [product]="productValue"></demo-product-added>'
})
class TestProductAddedComponentWrapper { 
  qtyValue: number = stubQty;
  productValue: Product;
}

describe('ProductAddedComponent', () => {
  let component: TestProductAddedComponentWrapper;
  let fixture: ComponentFixture<TestProductAddedComponentWrapper>;
  let productFactory: DaffProductFactory;
  let productImageFactory: DaffProductImageFactory;
  let stubProduct: Product;
  let productAdded: ProductAddedComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffDriverTestingModule
      ],
      declarations: [
        TestProductAddedComponentWrapper,
        ProductAddedComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProductAddedComponentWrapper);
    component = fixture.componentInstance;

    productFactory = TestBed.get(DaffProductFactory);
    productImageFactory = TestBed.get(DaffProductImageFactory);
    stubProduct = productFactory.create({images:productImageFactory.createMany(5)});
    component.productValue = stubProduct;

    fixture.detectChanges();

    productAdded = fixture.debugElement.query(By.css('demo-product-added')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take qty as input', () => {
    expect(productAdded.qty).toEqual(stubQty);
  });

  it('should be able to take product as input', () => {
    expect(productAdded.product).toEqual(stubProduct);
  });
  
  describe('when product is defined', () => {
    
    it('should render .product-added', () => {
      let productAddedElement = fixture.debugElement.query(By.css('.product-added'));

      expect(productAddedElement).not.toBeNull();
    });

    describe('and product.images is null', () => {
      
      beforeEach(() => {
        productAdded.product.images = null;
        fixture.detectChanges();
      });

      it('should not render img tag', () => {
        let imgTag = fixture.debugElement.query(By.css('img'));

        expect(imgTag).toBeNull();
      });
    });

    describe('and product.images is defined', () => {
      
      it('should render img tag', () => {
        let imgTag = fixture.debugElement.query(By.css('img'));

        expect(imgTag).not.toBeNull();
      });
    });
  });
  
  describe('when product is null', () => {
    
    beforeEach(() => {
      component.productValue = null;
      fixture.detectChanges();
    });
    
    it('should not render .product-added', () => {
      let productAddedElement = fixture.debugElement.query(By.css('.product-added'));

      expect(productAddedElement).toBeNull();
    });
  });
});
