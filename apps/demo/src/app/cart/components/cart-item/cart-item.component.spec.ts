import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { CartItemComponent } from './cart-item.component';

import { CartItem } from '@daffodil/cart';
import { DaffProductImageFactory } from '@daffodil/product/testing';
import { DaffQtyDropdownModule, DaffQtyDropdownComponent } from '@daffodil/design';
import { DaffCartItemFactory } from '@daffodil/cart/testing';

@Component({template: '<demo-cart-item [item]="cartItemValue"></demo-cart-item>'})
class WrapperComponent {
  cartItemValue: CartItem;
}

describe('CartItemComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartItemComponent;
  let qtyDropdownComponent: DaffQtyDropdownComponent;
  let router: Router;
  let cartItemFactory: DaffCartItemFactory;
  let productImageFactory: DaffProductImageFactory;
  let mockCartItem: CartItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffQtyDropdownModule
      ],
      declarations: [
        CartItemComponent,
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
    cartItemComponent = fixture.debugElement.query(By.css('demo-cart-item'));
    qtyDropdownComponent = fixture.debugElement.query(By.css('daff-qty-dropdown')).componentInstance;

    fixture.detectChanges();
  });
    
  it('should create', () => {
    expect(cartItemComponent).toBeTruthy();
  });

  it('can be passed a CartItem object', () => {
    expect(cartItemComponent.componentInstance.item).toEqual(mockCartItem);
  });

  it('renders a <daff-qty-dropdown>', () => {
    expect(qtyDropdownComponent).not.toBeNull();
  });
  
  describe('on <daff-qty-dropdown>', () => {
    
    it('sets qty', () => {
      expect(qtyDropdownComponent.qty).toEqual(mockCartItem.qty);
    });
    
    it('sets id', () => {
      expect(qtyDropdownComponent.id).toEqual(mockCartItem.item_id);
    });
  });

  describe('redirectToProduct', () => {
    
    it('should call router.navigateByUrl', () => {
      cartItemComponent.componentInstance.redirectToProduct();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/product/' + mockCartItem.product_id);
    });
  });

  describe('when cart-item image is clicked', () => {
    
    it('should call redirectToProduct', () => {
      spyOn(cartItemComponent.componentInstance, 'redirectToProduct');
      fixture.debugElement.query(By.css('img')).nativeElement.click();

      expect(cartItemComponent.componentInstance.redirectToProduct).toHaveBeenCalled();
    });
  });

  describe('when cart-item__name is clicked', () => {
    
    it('should call redirectToProduct', () => {
      spyOn(cartItemComponent.componentInstance, 'redirectToProduct');
      fixture.debugElement.query(By.css('.cart-item__name')).nativeElement.click();
      
      expect(cartItemComponent.componentInstance.redirectToProduct).toHaveBeenCalled();
    });
  });
});
