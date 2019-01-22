import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Product } from '@daffodil/core';
import { DaffProductFactory } from '@daffodil/core/testing';

import { ProductComponent } from './product.component';

import { 
  DaffAccordionModule, 
  DaffQtyDropdownModule, 
  DaffContainerModule,
  DaffQtyDropdownComponent 
} from '@daffodil/design';

@Component({template: '<demo-product [product]="productValue" [qty]="qtyValue" (updateQty)="updateQtyFunction($event)"></demo-product>'})
class WrapperComponent {
  productValue: Product;
  qtyValue: number;
  updateQtyFunction: Function;
}

@Component({selector: 'demo-image-gallery-container', template: ''})
class MockImageGalleryContainer {
  @Input() images;
}

describe('ProductComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  const productFactory = new DaffProductFactory();
  let router;
  const stubProduct: Product = productFactory.create();
  let stubQty = 1;
  let productComponent: ProductComponent;
  const mockFunction = (payload) => {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffContainerModule,
        DaffAccordionModule,
        DaffQtyDropdownModule,
        NoopAnimationsModule
      ],
      declarations: [ 
        ProductComponent,
        WrapperComponent,
        MockImageGalleryContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');
    wrapper.productValue = stubProduct;
    wrapper.qtyValue = stubQty;
    wrapper.updateQtyFunction = mockFunction;
    
    fixture.detectChanges();

    productComponent = fixture.debugElement.query(By.css('demo-product')).componentInstance;
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

  describe('on <demo-image-gallery-container>', () => {
    
    it('should set images', () => {
      const imageGalleryContainer = fixture.debugElement.query(By.css('demo-image-gallery-container')).componentInstance;

      expect(imageGalleryContainer.images).toEqual(productComponent.product.images);
    });
  });

  describe('on <daff-qty-dropdown>', () => {

    let qtyDropdownComponent: DaffQtyDropdownComponent;

    beforeEach(() => {
      qtyDropdownComponent = fixture.debugElement.query(By.css('daff-qty-dropdown')).componentInstance;
    });

    it('should set id', () => {
      expect(qtyDropdownComponent.id.toString()).toEqual(stubProduct.id);
    });
   
    it('should set qty', () => {
      expect(qtyDropdownComponent.qty).toEqual(stubQty);      
    });

    it('should call updateQty.emit when qtyChanged is called', () => {
      spyOn(productComponent.updateQty, 'emit');
      const newQty = 2;
      qtyDropdownComponent.qtyChanged.emit(newQty);

      expect(productComponent.updateQty.emit).toHaveBeenCalledWith(newQty);
    });
  });

  it('should call updateQtyFunction when updateQty is emitted', () => {
    const payload = 4;
    spyOn(wrapper, 'updateQtyFunction');
    
    productComponent.updateQty.emit(payload);

    expect(wrapper.updateQtyFunction).toHaveBeenCalledWith(payload);   
  });

  describe('onUpdateQty', () => {
    
    it('should call updateQty.emit', () => {
      spyOn(productComponent.updateQty, 'emit');
      stubQty = 4;
      productComponent.onUpdateQty(stubQty);

      expect(productComponent.updateQty.emit).toHaveBeenCalledWith(stubQty);
    });
  });

  describe('when product is null', () => {
    
    it('should redirect to the 404 not-found page', () => {
      fixture = TestBed.createComponent(WrapperComponent);
      wrapper = fixture.componentInstance;

      wrapper.productValue = null;
      fixture.detectChanges();
      
      expect(router.navigateByUrl).toHaveBeenCalledWith('/404');
    });
  });

  describe('on <daff-container>', () => {
    it('should set size="lg"', () => {
      const container = fixture.debugElement.query(By.css('daff-container'));

      expect(container.componentInstance.size).toEqual('lg');
    });
  });
});
