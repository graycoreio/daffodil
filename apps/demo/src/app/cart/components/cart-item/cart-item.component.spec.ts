import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffCartItem } from '@daffodil/cart';
import { DaffCartItemDelete } from '@daffodil/cart/state';
import {
  DaffCartStateTestingModule,
  MockDaffCartFacade,
} from '@daffodil/cart/state/testing';
import { DaffCartItemFactory } from '@daffodil/cart/testing';
import {
  DaffFormFieldModule,
  DaffQuantityFieldComponent,
  DaffQuantityFieldModule,
} from '@daffodil/design';
import { DaffProductImageFactory } from '@daffodil/product/testing';

import { CartItemComponent } from './cart-item.component';


@Component({
  template: '<demo-cart-item [item]="cartItemValue"></demo-cart-item>',
  standalone: false,
})
class WrapperComponent {
  cartItemValue: DaffCartItem;
}

describe('CartItemComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartItemComponent;
  let quantityFieldComponent: DaffQuantityFieldComponent;
  let router: Router;
  let cartItemFactory: DaffCartItemFactory;
  let productImageFactory: DaffProductImageFactory;
  let mockCartItem: DaffCartItem;
  let facade: MockDaffCartFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffQuantityFieldModule,
        DaffCartStateTestingModule,
        ReactiveFormsModule,
        DaffFormFieldModule,
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
    quantityFieldComponent = fixture.debugElement.query(By.css('daff-quantity-field')).componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(cartItemComponent).toBeTruthy();
  });

  it('can be passed a CartItem object', () => {
    expect(cartItemComponent.componentInstance.item).toEqual(mockCartItem);
  });

  it('renders a <daff-quantity-field>', () => {
    expect(quantityFieldComponent).not.toBeNull();
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

  describe('when the user clicks the remove button', () => {

    it('should remove the item from the cart', () => {
      const removeButton = fixture.debugElement.query(By.css('.demo-cart-item__remove')).nativeElement;
      removeButton.click();

      expect(facade.dispatch).toHaveBeenCalledOnceWith(new DaffCartItemDelete(mockCartItem.item_id));
    });
  });
});
