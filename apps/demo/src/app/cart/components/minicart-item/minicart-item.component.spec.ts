import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CartItem } from '@daffodil/core';
import { DaffCartItemFactory, DaffProductImageFactory } from '@daffodil/core/testing';

import { MiniCartItemComponent } from './minicart-item.component';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

@Component({template: '<demo-minicart-item [item]="cartItemValue"></demo-minicart-item>'})
class WrapperComponent {
  cartItemValue: CartItem;
}

describe('MiniCartItemComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartItemComponent: CartItemComponent;
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
        MiniCartItemComponent,
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
      fixture.debugElement.query(By.css('.minicart-item__name')).nativeElement.click();
      
      expect(cartItemComponent.redirectToProduct).toHaveBeenCalled();
    });
  });
});
