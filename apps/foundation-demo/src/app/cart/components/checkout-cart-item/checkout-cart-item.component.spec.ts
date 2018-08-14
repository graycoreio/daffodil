import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, CartItem } from '@daffodil/core';

import { CheckoutCartItemComponent } from './checkout-cart-item.component';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

let cartFactory = new CartFactory();
let mockCartItem = cartFactory.createCartItem();

@Component({template: '<checkout-cart-item [item]="cartItemValue"></checkout-cart-item>'})
class TestCheckoutCartItemWrapper {
  cartItemValue: CartItem;
}

describe('CheckoutCartItemComponent', () => {
  let component: TestCheckoutCartItemWrapper;
  let fixture: ComponentFixture<TestCheckoutCartItemWrapper>;
  let cartItemComponent;
  let router: Router;

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
    cartItemComponent = fixture.debugElement.query(By.css('checkout-cart-item'));

    fixture.detectChanges();
  });

  describe('when cart has a cartItem', () => {
    
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('can be passed a CartItem object', () => {
      expect(cartItemComponent.componentInstance.item).toEqual(mockCartItem);
    });

    describe('redirectToProduct', () => {
      
      it('should call router.navigateByUrl', () => {
        cartItemComponent.componentInstance.redirectToProduct();

        expect(router.navigateByUrl).toHaveBeenCalledWith('/product/' + mockCartItem.item_id);
      });
    });

    describe('when checkout-cart-item image is clicked', () => {
      
      it('should call redirectToProduct', () => {
        spyOn(cartItemComponent.componentInstance, 'redirectToProduct');
        fixture.debugElement.query(By.css('img')).nativeElement.click();

        expect(cartItemComponent.componentInstance.redirectToProduct).toHaveBeenCalled();
      });
    });

    describe('when checkout-cart-item__name is clicked', () => {
      
      it('should call redirectToProduct', () => {
        spyOn(cartItemComponent.componentInstance, 'redirectToProduct');
        fixture.debugElement.query(By.css('.checkout-cart-item__name')).nativeElement.click();
        
        expect(cartItemComponent.componentInstance.redirectToProduct).toHaveBeenCalled();
      });
    });
  });
});
