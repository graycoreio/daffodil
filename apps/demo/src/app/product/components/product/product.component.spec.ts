import {
  Component,
  Input,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import {
  DaffFormFieldModule,
  DaffQuantityFieldModule,
} from '@daffodil/design';
import { DaffAccordionModule } from '@daffodil/design/accordion';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffProduct } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';

import { ProductComponent } from './product.component';

@Component({
  template: '<demo-product [product]="productValue" [qty]="qtyValue" (updateQty)="updateQtyFunction($event)"></demo-product>',
  standalone: false,
})
class WrapperComponent {
  productValue: DaffProduct;
  qtyValue: number;
  updateQtyFunction(e) {};
}

@Component({
  selector: 'demo-image-gallery-container', template: '',
  standalone: false,
})
class MockImageGalleryContainer {
  @Input() images;
}

describe('ProductComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let productFactory: DaffProductFactory;
  let router;
  let stubProduct: DaffProduct;
  let productComponent: ProductComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        DaffContainerModule,
        DaffAccordionModule,
        DaffQuantityFieldModule,
        NoopAnimationsModule,
        DaffFormFieldModule,
      ],
      declarations: [
        ProductComponent,
        WrapperComponent,
        MockImageGalleryContainer,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    productFactory = TestBed.inject(DaffProductFactory);

    stubProduct = productFactory.create();

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    wrapper.productValue = stubProduct;

    fixture.detectChanges();

    productComponent = fixture.debugElement.query(By.css('demo-product')).componentInstance;
  });

  it('renders a product-container', () => {
    expect(fixture.debugElement.query(By.css('.product-container'))).toBeDefined();
  });

  it('should be able to take a product input', () => {
    expect(productComponent.product).toEqual(stubProduct);
  });

  describe('on <demo-image-gallery-container>', () => {

    it('should set images', () => {
      const imageGalleryContainer = fixture.debugElement.query(By.css('demo-image-gallery-container')).componentInstance;

      expect(imageGalleryContainer.images).toEqual(productComponent.product.images);
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
});
