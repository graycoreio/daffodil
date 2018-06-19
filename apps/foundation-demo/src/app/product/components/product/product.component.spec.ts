import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductFactory } from '@daffodil/core';
import { Product } from '@daffodil/core';

import { ProductComponent } from './product.component';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Image } from '../../../design/interfaces/image';
import { QtyDropdownComponent } from '../../../design/molecules/qty-dropdown/qty-dropdown.component';
import { ImageGalleryComponent } from '../../../design/molecules/image-gallery/image-gallery.component';

@Component({template: '<product [product]="productValue" [qty]="qtyValue" (addToCart)="addToCartFunction($event)" (updateQty)="updateQtyFunction($event)"></product>'})
class ProductWrapperTest {
  productValue: Product;
  qtyValue: number;
  addToCartFunction: Function;
  updateQtyFunction: Function;
}

@Component({selector: 'qty-dropdown', template: ''})
class MockQtyDropdownComponent {
  @Input() qty: number;
  @Input() id: number;
  @Output() qtyChanged: EventEmitter<any> = new EventEmitter();
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
  let stubProduct: Product = productFactory.create();
  let stubQty: number = 1;
  let productComponent: ProductComponent;
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
    component.qtyValue = stubQty;
    component.addToCartFunction = mockFunction;
    component.updateQtyFunction = mockFunction;
    fixture.detectChanges();

    productComponent = fixture.debugElement.query(By.css('product')).componentInstance;
  });

  it('renders a product-container', () => {
    expect(fixture.debugElement.query(By.css('.product-container'))).toBeDefined();
  });

  it('should be able to take a product input', () => {
    expect(productComponent.product).toEqual(stubProduct);
  });

  it('should be able to take a qty input', () => {
    expect(productComponent.qty).toEqual(stubQty);
  });

  it('should call addToCartFunction when addToCart is emitted', () => {
    let payload = 'payload';
    spyOn(component, 'addToCartFunction');
    
    productComponent.addToCart.emit(payload);

    expect(component.addToCartFunction).toHaveBeenCalledWith(payload);   
  });

  it('should call updateQtyFunction when updateQty is emitted', () => {
    let payload = 4;
    spyOn(component, 'updateQtyFunction');
    
    productComponent.updateQty.emit(payload);

    expect(component.updateQtyFunction).toHaveBeenCalledWith(payload);   
  });

  describe('ngOnInit', () => {
    
    it('should initialize qty to 1', () => {
      expect(productComponent.qty).toEqual(1);
    });
  });

  describe('addProductToCart', () => {
    
    it('should call addToCart.emit', () => {
      spyOn(productComponent.addToCart, 'emit');
      productComponent.addProductToCart();

      expect(productComponent.addToCart.emit).toHaveBeenCalledWith({productId: stubProduct.id, qty: productComponent.qty});
    });
  });

  describe('onUpdateQty', () => {
    
    it('should call updateQty.emit', () => {
      spyOn(productComponent.updateQty, 'emit');
      let stubQty = 4;
      productComponent.onUpdateQty(stubQty);

      expect(productComponent.updateQty.emit).toHaveBeenCalledWith(stubQty);
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
      let imageGalleryComponent:ImageGalleryComponent = fixture.debugElement.query(By.css('image-gallery')).componentInstance;

      expect(imageGalleryComponent.images).toEqual(productComponent.images);
    });
  });

  describe('on <qty-dropdown>', () => {

    let qtyDropdownComponent: QtyDropdownComponent;

    beforeEach(() => {
      qtyDropdownComponent = fixture.debugElement.query(By.css('qty-dropdown')).componentInstance;
    });

    it('should set id', () => {
      expect(qtyDropdownComponent.id.toString()).toEqual(stubProduct.id);
    });
   
    it('should set qty', () => {
      expect(qtyDropdownComponent.qty).toEqual(stubQty);      
    });

    it('should call updateQty.emit when qtyChanged is called', () => {
      spyOn(productComponent.updateQty, 'emit');
      let newQty = 2;
      qtyDropdownComponent.qtyChanged.emit(newQty);

      expect(productComponent.updateQty.emit).toHaveBeenCalledWith(newQty);
    });
  });
});
