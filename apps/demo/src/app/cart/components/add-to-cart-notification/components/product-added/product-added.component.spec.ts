import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductFactory,
  DaffProductImageFactory,
} from '@daffodil/product/testing';

import { ProductAddedComponent } from './product-added.component';

const stubQty = 1;

@Component({
  template: '<demo-product-added [qty]="qtyValue" [product]="productValue"></demo-product-added>',
  standalone: false,
})
class WrapperComponent {
  qtyValue: number = stubQty;
  productValue: DaffProduct;
}

describe('ProductAddedComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let productFactory: DaffProductFactory;
  let productImageFactory: DaffProductImageFactory;
  let stubProduct: DaffProduct;
  let productAdded: ProductAddedComponent;
  let productAddedElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        ProductAddedComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    productFactory = TestBed.inject(DaffProductFactory);
    productImageFactory = TestBed.inject(DaffProductImageFactory);
    stubProduct = productFactory.create({ images:productImageFactory.createMany(5) });
    wrapper.productValue = stubProduct;

    fixture.detectChanges();

    productAdded = fixture.debugElement.query(By.css('demo-product-added')).componentInstance;
  });

  it('should create', () => {
    expect(productAdded).toBeTruthy();
  });

  it('should be able to take qty as input', () => {
    expect(productAdded.qty).toEqual(stubQty);
  });

  it('should be able to take product as input', () => {
    expect(productAdded.product).toEqual(stubProduct);
  });

  describe('when product is defined', () => {

    it('should render .demo-product-added', () => {
      productAddedElement = fixture.debugElement.query(By.css('.demo-product-added'));

      expect(productAddedElement).not.toBeNull();
    });

    describe('and product.images is null', () => {

      beforeEach(() => {
        productAdded.product.images = null;
        fixture.detectChanges();
      });

      it('should not render img tag', () => {
        const imgTag = fixture.debugElement.query(By.css('img'));

        expect(imgTag).toBeNull();
      });
    });

    describe('and product.images is defined', () => {

      it('should render img tag', () => {
        const imgTag = fixture.debugElement.query(By.css('img'));

        expect(imgTag).not.toBeNull();
      });
    });
  });

  describe('when product is null', () => {

    beforeEach(() => {
      wrapper.productValue = null;
      fixture.detectChanges();
    });

    it('should not render .demo-product-added', () => {
      productAddedElement = fixture.debugElement.query(By.css('.demo-product-added'));

      expect(productAddedElement).toBeNull();
    });
  });
});
