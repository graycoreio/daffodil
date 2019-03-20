import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { Cart, CartItem } from '@daffodil/cart';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

import { CartSummaryComponent } from './cart-summary.component';

@Component({template: '<demo-cart-summary [cart]="cartValue" [title]="titleValue"></demo-cart-summary>'})
class WrapperComponent {
  cartValue: Cart;
  titleValue: string;
}

@Component({selector: 'demo-minicart-item', template: ''})
class MockMiniCartItemComponent {
  @Input() item: CartItem;
}

describe('CartSummaryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let minicartItems;
  let cartSummary: CartSummaryComponent;
  let router;
  let cartFactory: DaffCartFactory ;
  let cartItemFactory: DaffCartItemFactory;
  let mockCart: Cart;
  const stubTitle = 'title';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CartSummaryComponent,
        WrapperComponent,
        MockMiniCartItemComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');
    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);

    mockCart = cartFactory.create({
      items: cartItemFactory.createMany(2)
    });

    wrapper.cartValue = mockCart;
    wrapper.titleValue = stubTitle;

    fixture.detectChanges();

    minicartItems = fixture.debugElement.queryAll(By.css('demo-minicart-item'));
    cartSummary = fixture.debugElement.query(By.css('demo-cart-summary')).componentInstance;
  });

  it('should create', () => {
    expect(cartSummary).toBeTruthy();
  });

  it('can be passed a Cart object', () => {
    expect(cartSummary.cart).toEqual(mockCart);
  });

  it('can be passed a title as input', () => {
    expect(cartSummary.title).toEqual(stubTitle);
  });

  it('renders a <demo-minicart-item> for every miniCart.items', () => {
    expect(minicartItems.length).toEqual(mockCart.items.length);
  });

  describe('on <demo-minicart-item>', () => {
    it('should set item', () => {
      expect(minicartItems[0].componentInstance.item).toEqual(mockCart.items[0]);  
    });
  });

  describe('when title is null', () => {
    
    it('should not render .cart-summary__header', () => {
      cartSummary.title = null;
      fixture.detectChanges();

      const cartTitleElement = fixture.debugElement.query(By.css('.cart-summary__title'));

      expect(cartTitleElement).toBeNull();
    });
  });

  describe('when title is defined', () => {
    
    it('should render .cart-summary__header', () => {
      const cartTitleElement = fixture.debugElement.query(By.css('.cart-summary__title'));

      expect(cartTitleElement).not.toBeNull();
    });
  });

  describe('when Edit Cart is clicked', () => {

    beforeEach(() => {
      fixture.debugElement.query(By.css('a')).nativeElement.click();
    });
    
    it('should call router.navigateByUrl', () => {
      expect(router.navigateByUrl).toHaveBeenCalledWith('/cart');
    });
  });
});