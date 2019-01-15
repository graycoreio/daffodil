import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CartItem } from '@daffodil/core';
import { DaffCartItemFactory, DaffProductImageFactory } from '@daffodil/core/testing';

import { CheckoutCartItemComponent } from './checkout-cart-item.component';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

@Component({template: '<demo-checkout-cart-item [item]="cartItemValue"></demo-checkout-cart-item>'})
class WrapperComponent {
  cartItemValue: CartItem;
}

describe('CheckoutCartItemComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let checkoutCartItemComponent: CartItemComponent;
  let cartItemFactory: DaffCartItemFactory;
  let productImageFactory: DaffProductImageFactory;
  let mockCartItem: CartItem;
  let router: Router;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffDriverTestingModule
      ],
      declarations: [
        CheckoutCartItemComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');
    cartItemFactory = TestBed.get(DaffCartItemFactory);
    productImageFactory = TestBed.get(DaffProductImageFactory);
    mockCartItem = cartItemFactory.create({image: productImageFactory.create()});

    wrapper.cartItemValue = mockCartItem;
    checkoutCartItemComponent = fixture.debugElement.query(By.css('demo-checkout-cart-item')).componentInstance;

    fixture.detectChanges();
  });

  describe('when cart has a cartItem', () => {
    
    it('should create', () => {
      expect(checkoutCartItemComponent).toBeTruthy();
    });

    it('can be passed a CartItem object', () => {
      expect(checkoutCartItemComponent.item).toEqual(mockCartItem);
    });

    describe('redirectToProduct', () => {
      
      it('should call router.navigateByUrl', () => {
        checkoutCartItemComponent.redirectToProduct();

        expect(router.navigateByUrl).toHaveBeenCalledWith('/product/' + mockCartItem.product_id);
      });
    });

    describe('when checkout-cart-item image is clicked', () => {
      
      it('should call redirectToProduct', () => {
        spyOn(checkoutCartItemComponent, 'redirectToProduct');
        fixture.debugElement.query(By.css('img')).nativeElement.click();

        expect(checkoutCartItemComponent.redirectToProduct).toHaveBeenCalled();
      });
    });

    describe('when checkout-cart-item__name is clicked', () => {
      
      it('should call redirectToProduct', () => {
        spyOn(checkoutCartItemComponent, 'redirectToProduct');
        fixture.debugElement.query(By.css('.checkout-cart-item__name')).nativeElement.click();
        
        expect(checkoutCartItemComponent.redirectToProduct).toHaveBeenCalled();
      });
    });
  });
});
