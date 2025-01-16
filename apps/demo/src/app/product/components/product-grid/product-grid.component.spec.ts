import {
  Component,
  Input,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffProduct } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';

import { ProductGridComponent } from './product-grid.component';

@Component({
  template: '<demo-product-grid [products]="productsValue"></demo-product-grid>',
  standalone: false,
})
class WrapperComponent {
  productsValue: DaffProduct[];
}

@Component({
  selector: 'demo-product-card', template: '',
  standalone: false,
})
class MockProductCardComponent {
  @Input() product: DaffProduct;
}

describe('ProductGridComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let productFactory: DaffProductFactory;
  let productCards;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockProductCardComponent,
        ProductGridComponent,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    productFactory = TestBed.inject(DaffProductFactory);

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.productsValue = [productFactory.create(), productFactory.create()];

    fixture.detectChanges();

    productCards = fixture.debugElement.queryAll(By.css('demo-product-card'));
  });

  it('should be able to take an input of products', () => {
    const productGridComponent = fixture.debugElement.query(By.css('demo-product-grid'));

    expect(productGridComponent.componentInstance.products).toEqual(wrapper.productsValue);
  });

  describe('on <demo-product-card>', () => {

    it('should set product', () => {
      expect(productCards[0].componentInstance.product).toEqual(wrapper.productsValue[0]);
    });
  });

  it('renders a product-card for each product in products', () => {
    expect(productCards.length).toEqual(wrapper.productsValue.length);
  });
});
