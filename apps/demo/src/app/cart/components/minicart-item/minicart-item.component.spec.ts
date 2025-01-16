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
import { DaffCartItemFactory } from '@daffodil/cart/testing';
import { DaffProductImageFactory } from '@daffodil/product/testing';

import { MiniCartItemComponent } from './minicart-item.component';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  template: '<demo-minicart-item [item]="cartItemValue"></demo-minicart-item>',
  standalone: false,
})
class WrapperComponent {
  cartItemValue: DaffCartItem;
}

describe('MiniCartItemComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartItemComponent: CartItemComponent;
  let cartItemFactory: DaffCartItemFactory;
  let productImageFactory: DaffProductImageFactory;
  let mockCartItem: DaffCartItem;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        MiniCartItemComponent,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    productImageFactory = TestBed.inject(DaffProductImageFactory);
    mockCartItem = cartItemFactory.create({ image: productImageFactory.create() });

    wrapper.cartItemValue = mockCartItem;
    cartItemComponent = fixture.debugElement.query(By.css('demo-minicart-item')).componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(cartItemComponent).toBeTruthy();
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

  describe('when minicart-item image is clicked', () => {

    it('should call redirectToProduct', () => {
      spyOn(cartItemComponent, 'redirectToProduct');
      fixture.debugElement.query(By.css('img')).nativeElement.click();

      expect(cartItemComponent.redirectToProduct).toHaveBeenCalled();
    });
  });

  describe('when minicart-item__name is clicked', () => {

    it('should call redirectToProduct', () => {
      spyOn(cartItemComponent, 'redirectToProduct');
      fixture.debugElement.query(By.css('.demo-minicart-item__name')).nativeElement.click();

      expect(cartItemComponent.redirectToProduct).toHaveBeenCalled();
    });
  });
});
