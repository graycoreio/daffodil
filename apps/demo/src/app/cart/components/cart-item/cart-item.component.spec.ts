import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffCartItem } from '@daffodil/cart';
import {
  DaffCartItemDelete,
  DaffCartItemUpdate,
} from '@daffodil/cart/state';
import {
  DaffCartStateTestingModule,
  MockDaffCartFacade,
} from '@daffodil/cart/state/testing';
import { DaffCartItemFactory } from '@daffodil/cart/testing';
import {
  DaffQtyDropdownModule,
  DaffQtyDropdownComponent,
} from '@daffodil/design';
import { DaffProductImageFactory } from '@daffodil/product/testing';

import { CartItemComponent } from './cart-item.component';

@Component({ template: '<demo-cart-item [item]="cartItemValue"></demo-cart-item>' })
class WrapperComponent {
  cartItemValue: DaffCartItem;
}

describe('CartItemComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartItemComponent;
  let qtyDropdownComponent: DaffQtyDropdownComponent;
  let router: Router;
  let cartItemFactory: DaffCartItemFactory;
  let productImageFactory: DaffProductImageFactory;
  let mockCartItem: DaffCartItem;
  let facade: MockDaffCartFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffQtyDropdownModule,
        DaffCartStateTestingModule,
      ],
      declarations: [
        CartItemComponent,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    router = TestBed.inject(Router);
    facade = TestBed.inject(MockDaffCartFacade);
    spyOn(facade, 'dispatch');
    spyOn(router, 'navigateByUrl');
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    productImageFactory = TestBed.inject(DaffProductImageFactory);
    mockCartItem = cartItemFactory.create({ image: productImageFactory.create() });

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
      fixture.debugElement.query(By.css('.demo-cart-item__name')).nativeElement.click();

      expect(cartItemComponent.componentInstance.redirectToProduct).toHaveBeenCalled();
    });
  });

  describe('when the user changes the quantity of the item', () => {

    it('should notify state of the quantity change', () => {
      const newQuantity = 3;
      qtyDropdownComponent.qtyChanged.emit(newQuantity);

      expect(facade.dispatch).toHaveBeenCalledWith(new DaffCartItemUpdate(mockCartItem.item_id, { qty: newQuantity }));
    });
  });

  describe('when the user clicks the remove button', () => {

    it('should remove the item from the cart', () => {
      const removeButton = fixture.debugElement.query(By.css('.demo-cart-item__remove')).nativeElement;
      removeButton.click();

      expect(facade.dispatch).toHaveBeenCalledOnceWith(new DaffCartItemDelete(mockCartItem.item_id));
    });
  });
});
