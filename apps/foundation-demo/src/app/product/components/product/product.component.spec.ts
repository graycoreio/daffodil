import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductFactory } from '@daffodil/core';
import { Product } from '@daffodil/core';

import { ProductComponent } from './product.component';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Image } from '../../../design/interfaces/image';

@Component({template: '<product [product]="productValue" (addToCart)="addToCartFunction($event)"></product>'})
class ProductWrapperTest {
  productValue: Product;
  addToCartFunction;
}

@Component({selector: 'qty-dropdown', template: ''})
class MockQtyDropdownComponent {
  @Input() qty: string;
  @Input() id: string;
}

@Component({selector: 'image-gallery', template: ''})
class MockImageGalleryComponent { 
  @Input() images: Image[];
}

@Component({selector: 'accordion', template: ''})
class MockAccordionComponent { 
  @Input() title: string;
  @Input() id: string;
}

@Component({selector: 'accordion-item', template: ''})
class MockAccordionItemComponent {
  @Input() initiallyActive: boolean;
}

@Component({selector: 'add-to-cart', template: ''})
class MockAddToCartComponent { }

describe('ProductComponent', () => {
  let component: ProductWrapperTest;
  let fixture: ComponentFixture<ProductWrapperTest>;
  let productFactory = new ProductFactory();
  let router;
  let stubProduct = productFactory.create();
  let productComponent;
  let mockFunction = (payload) => {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        ProductComponent,
        ProductWrapperTest,
        MockQtyDropdownComponent,
        MockImageGalleryComponent,
        MockAccordionComponent,
        MockAccordionItemComponent,
        MockAddToCartComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWrapperTest);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    component.productValue = stubProduct;
    component.addToCartFunction = mockFunction;
    fixture.detectChanges();

    productComponent = fixture.debugElement.query(By.css('product'));
  });

  it('renders a product-container', () => {
    expect(fixture.debugElement.query(By.css('.product-container'))).toBeDefined();
  });

  it('should be able to take a product input', () => {
    expect(productComponent.componentInstance.product).toEqual(stubProduct);
  });

  it('should call addToCartFunction when addToCart is emitted', () => {
    let payload = 'payload';
    spyOn(component, 'addToCartFunction');
    
    productComponent.componentInstance.addToCart.emit(payload);

    expect(component.addToCartFunction).toHaveBeenCalledWith(payload);   
  });

  describe('ngOnInit', () => {
    
    it('should initialize qty to 1', () => {
      expect(productComponent.componentInstance.qty).toEqual(1);
    });
  });

  describe('addProductToCart', () => {
    
    it('should call addToCart.emit', () => {
      spyOn(productComponent.componentInstance.addToCart, 'emit');
      productComponent.componentInstance.addProductToCart();

      expect(productComponent.componentInstance.addToCart.emit).toHaveBeenCalledWith({product: stubProduct, qty: productComponent.componentInstance.qty});
    });
  });

  describe('updateQty', () => {
    
    it('should set qty to argument', () => {
      let stubQty = 4;
      productComponent.componentInstance.updateQty(stubQty);

      expect(productComponent.componentInstance.qty).toEqual(stubQty);
    });
  });

  describe('when product is null', () => {
    
    it('should redirect to the 404 not-found page', () => {
      fixture = TestBed.createComponent(ProductWrapperTest);
      component = fixture.componentInstance;

      component.productValue = null;
      fixture.detectChanges();
      
      expect(router.navigateByUrl).toHaveBeenCalledWith('/404');
    });
  });

  describe('on <image-gallery>', () => {
    
    it('should set images', () => {
      let imageGalleryComponent = fixture.debugElement.query(By.css('image-gallery'));

      expect(imageGalleryComponent.componentInstance.images).toEqual(productComponent.componentInstance.images);
    });
  });

  describe('on <qty-dropdown>', () => {
    
    it('should set id', () => {
      let qtyDropdownComponent = fixture.debugElement.query(By.css('qty-dropdown'));

      expect(qtyDropdownComponent.componentInstance.id).toEqual(mockProduct.id);
    });
  });
});
