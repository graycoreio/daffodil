import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CartItem } from '@daffodil/core';
import { DaffCartItemFactory } from '@daffodil/core/testing';

import { CheckoutCartItemComponent } from './checkout-cart-item.component';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({template: '<checkout-cart-item [item]="cartItemValue"></checkout-cart-item>'})
class TestCheckoutCartItemWrapper {
  cartItemValue: CartItem;
}

describe('CheckoutCartItemComponent', () => {
  let component: TestCheckoutCartItemWrapper;
  let fixture: ComponentFixture<TestCheckoutCartItemWrapper>;
  let cartItemComponent: CartItemComponent;
  let router: Router;
  let cartItemFactory = new DaffCartItemFactory();
  let mockCartItem = cartItemFactory.create();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CheckoutCartItemComponent,
        TestCheckoutCartItemWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCheckoutCartItemWrapper);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    component.cartItemValue = mockCartItem;
    cartItemComponent = fixture.debugElement.query(By.css('checkout-cart-item')).componentInstance;

    fixture.detectChanges();
  });

  describe('when cart has a cartItem', () => {
    
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('can be passed a CartItem object', () => {
      expect(cartItemComponent.item).toEqual(mockCartItem);
    });

    describe('redirectToProduct', () => {
      
      it('should call router.navigateByUrl', () => {
        cartItemComponent.redirectToProduct();

        expect(router.navigateByUrl).toHaveBeenCalledWith('/product/' + mockCartItem.product_id);
      });
    });

    describe('when checkout-cart-item image is clicked', () => {
      
      it('should call redirectToProduct', () => {
        spyOn(cartItemComponent, 'redirectToProduct');
        fixture.debugElement.query(By.css('img')).nativeElement.click();

        expect(cartItemComponent.redirectToProduct).toHaveBeenCalled();
      });
    });

    describe('when checkout-cart-item__name is clicked', () => {
      
      it('should call redirectToProduct', () => {
        spyOn(cartItemComponent, 'redirectToProduct');
        fixture.debugElement.query(By.css('.checkout-cart-item__name')).nativeElement.click();
        
        expect(cartItemComponent.redirectToProduct).toHaveBeenCalled();
      });
    });
  });
});
