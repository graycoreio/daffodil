import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { Product } from '@daffodil/core';
import { ProductFactory } from '@daffodil/core/testing';

import { ProductComponent } from './product.component';

import { 
  AccordionModule, 
  DaffQtyDropdownModule, 
  DaffImageGalleryModule, 
  DaffContainerModule 
} from '@daffodil/design';


@Component({template: '<product [product]="productValue" [qty]="qtyValue" (updateQty)="updateQtyFunction($event)"></product>'})
class ProductWrapperTest {
  productValue: Product;
  qtyValue: number;
  updateQtyFunction: Function;
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
        RouterTestingModule,
        DaffContainerModule,
        AccordionModule,
        DaffQtyDropdownModule,
        DaffImageGalleryModule
      ],
      declarations: [ 
        ProductComponent,
        ProductWrapperTest
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

  describe('on <image-gallery>', () => {
    
    it('should set images', () => {
      let imageGalleryComponent = fixture.debugElement.query(By.css('image-gallery')).componentInstance;

      expect(imageGalleryComponent.images).toEqual(productComponent.images);
    });
  });

  describe('on <qty-dropdown>', () => {

    let qtyDropdownComponent;

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

  describe('on <daff-container>', () => {
    it('should set size="large"', () => {
      let container = fixture.debugElement.query(By.css('daff-container'));

      expect(container.componentInstance.size).toEqual('large');
    });
  });
});
