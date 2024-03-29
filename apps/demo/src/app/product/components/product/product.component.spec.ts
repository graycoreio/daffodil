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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import {
  DaffQtyDropdownModule,
  DaffQtyDropdownComponent,
} from '@daffodil/design';
import { DaffAccordionModule } from '@daffodil/design/accordion';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffProduct } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';

import { ProductComponent } from './product.component';

@Component({ template: '<demo-product [product]="productValue" [qty]="qtyValue" (updateQty)="updateQtyFunction($event)"></demo-product>' })
class WrapperComponent {
  productValue: DaffProduct;
  qtyValue: number;
  updateQtyFunction(e) {};
}

@Component({ selector: 'demo-image-gallery-container', template: '' })
class MockImageGalleryContainer {
  @Input() images;
}

describe('ProductComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let productFactory: DaffProductFactory;
  let router;
  let stubProduct: DaffProduct;
  let stubQty = 1;
  let productComponent: ProductComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffContainerModule,
        DaffAccordionModule,
        DaffQtyDropdownModule,
        NoopAnimationsModule,
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
    wrapper.qtyValue = stubQty;

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
