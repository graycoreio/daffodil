import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { CartItemComponent } from './cart-item.component';

import { Cart, CartItem } from '@daffodil/core';
import { DaffCartItemFactory } from '@daffodil/core/testing';

let cartItemFactory = new DaffCartItemFactory();
let mockCartItem: CartItem = cartItemFactory.create();

@Component({template: '<cart-item [item]="cartItemValue"></cart-item>'})
class TestCartItemWrapper {
  cartItemValue: CartItem;
}

@Component({selector: 'qty-dropdown', template: ''})
class MockQtyDropdownComponent {
  @Input() qty: number;
  @Input() id: number;
}

describe('CartItemComponent', () => {
  let component: TestCartItemWrapper;
  let fixture: ComponentFixture<TestCartItemWrapper>;
  let cartItemComponent;
  let qtyDropdownComponent: MockQtyDropdownComponent;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CartItemComponent,
        TestCartItemWrapper,
        MockQtyDropdownComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartItemWrapper);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    component.cartItemValue = mockCartItem;
    cartItemComponent = fixture.debugElement.query(By.css('cart-item'));
    qtyDropdownComponent = fixture.debugElement.query(By.css('qty-dropdown')).componentInstance;

    fixture.detectChanges();
  });
    
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can be passed a CartItem object', () => {
    expect(cartItemComponent.componentInstance.item).toEqual(mockCartItem);
  });

  it('renders a <qty-dropdown>', () => {
    expect(qtyDropdownComponent).not.toBeNull();
  });
  
  describe('on <qty-dropdown>', () => {
    
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
