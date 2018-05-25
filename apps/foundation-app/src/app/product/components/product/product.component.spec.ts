import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductFactory } from '@daffodil/core';
import { Product } from '@daffodil/core';

import { ProductComponent } from './product.component';
import { Component, Input } from '@angular/core';

@Component({template: '<product [product]="productValue"></product>'})
class ProductWrapperTest {
  productValue: Product;
}

@Component({selector: 'qty-dropdown', template: ''})
class MockQtyDropdownComponent {
  @Input() qty: string;
  @Input() id: string;
}

describe('ProductComponent', () => {
  let component: ProductWrapperTest;
  let fixture: ComponentFixture<ProductWrapperTest>;
  let productFactory = new ProductFactory();
  let mockProduct = productFactory.create();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductComponent,
        ProductWrapperTest,
        MockQtyDropdownComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWrapperTest);
    component = fixture.componentInstance;

    component.productValue = mockProduct;
    fixture.detectChanges();
  });

  it('renders a product-container', () => {
    expect(fixture.debugElement.query(By.css('.product-container'))).toBeDefined();
  });

  it('should be able to take a product input', () => {
    let productComponent = fixture.debugElement.query(By.css('product'));

    expect(productComponent.componentInstance.product).toEqual(mockProduct);
  });

  xdescribe('on <qty-dropdown>', () => {
    
    it('should set qty', () => {
      
    });
  });
});
