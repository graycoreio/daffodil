import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductFactory,
  DaffProductImageFactory,
} from '@daffodil/product/testing';

import { ProductCardComponent } from './product-card.component';

@Component({
  template: '<demo-product-card [product]="productValue"></demo-product-card>',
  standalone: false,
})
class WrapperComponent {
  productValue: DaffProduct;
}

describe('ProductCardComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let router;
  let productCardComponent;
  let productImageFactory: DaffProductImageFactory;
  let productFactory: DaffProductFactory;
  let stubProduct: DaffProduct;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        ProductCardComponent,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    productImageFactory = TestBed.inject(DaffProductImageFactory);
    productFactory = TestBed.inject(DaffProductFactory);

    const stubProductImages = productImageFactory.createMany(5);
    stubProduct = productFactory.create({ images: stubProductImages });

    wrapper.productValue = stubProduct;
    router = TestBed.inject(Router);
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
});
