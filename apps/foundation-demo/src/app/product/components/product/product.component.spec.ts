import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductFactory } from '@daffodil/core';
import { Product } from '@daffodil/core';

import { ProductComponent } from './product.component';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Image } from '../../../design/interfaces/image';
import { FormsModule } from '@angular/forms';

@Component({template: '<product [product]="productValue"></product>'})
class ProductWrapperTest {
  productValue: Product;
}

@Component({selector: 'qty-dropdown', template: ''})
class MockQtyDropdownComponent {}

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

describe('ProductComponent', () => {
  let component: ProductWrapperTest;
  let fixture: ComponentFixture<ProductWrapperTest>;
  let productFactory = new ProductFactory();
  let mockProduct = productFactory.create();
  let router;
  let productComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ 
        ProductComponent,
        ProductWrapperTest,
        MockQtyDropdownComponent,
        MockImageGalleryComponent,
        MockAccordionComponent,
        MockAccordionItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWrapperTest);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    component.productValue = mockProduct;
    fixture.detectChanges();

    productComponent = fixture.debugElement.query(By.css('product'));
  });

  it('renders a product-container', () => {
    expect(fixture.debugElement.query(By.css('.product-container'))).toBeDefined();
  });

  it('should be able to take a product input', () => {

    expect(productComponent.componentInstance.product).toEqual(mockProduct);
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
    
    xit('', () => {

    });
  });
});
