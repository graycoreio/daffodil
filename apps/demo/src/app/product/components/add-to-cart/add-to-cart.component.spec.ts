import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffCartItemInputType } from '@daffodil/cart';

import { AddToCartComponent } from './add-to-cart.component';

@Component({
  template: '<demo-add-to-cart (addToCart)="eventCatcher()" [additive]="additiveValue" [qty]="qtyValue"></demo-add-to-cart>',
  standalone: false,
})
class WrapperComponent {
  additiveValue = 'additiveValue';
  qtyValue = 1;
  eventCatcher;
}

describe('AddToCartComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let addToCartComponent: AddToCartComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        WrapperComponent,
        AddToCartComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.eventCatcher = () => {};

    fixture.detectChanges();

    addToCartComponent = fixture.debugElement.query(By.css('demo-add-to-cart')).componentInstance;
  });

  it('should create', () => {
    expect(addToCartComponent).toBeTruthy();
  });

  it('should be able to take additive as input', () => {
    expect(addToCartComponent.additive).toEqual(wrapper.additiveValue);
  });

  it('should be able to take qty as input', () => {
    expect(addToCartComponent.qty).toEqual(wrapper.qtyValue);
  });

  describe('when add to cart button is clicked', () => {

    beforeEach(() => {
      spyOn(addToCartComponent, 'emitAddToCart');

      fixture.debugElement.query(By.css('button')).nativeElement.click();
    });

    it('should call emitAddToCart', () => {
      expect(addToCartComponent.emitAddToCart).toHaveBeenCalled();
    });
  });

  describe('emitAddToCart', () => {

    it('should call addToCart.emit', () => {
      spyOn(addToCartComponent.addToCart, 'emit');

      addToCartComponent.emitAddToCart();

      expect(addToCartComponent.addToCart.emit).toHaveBeenCalledWith({
        productId: addToCartComponent.additive.id,
        qty: addToCartComponent.qty,
        type: DaffCartItemInputType.Simple,
      });
    });
  });
});
