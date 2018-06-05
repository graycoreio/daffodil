import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, CartItem } from '@daffodil/core';

import { CartItemComponent } from './cart-item.component';
import { Component, Input } from '@angular/core';

let cartFactory = new CartFactory();
let mockCartItem = cartFactory.createCartItem();

@Component({template: '<cart-item [item]="cartItemValue"></cart-item>'})
class TestCartItemWrapper {
  cartItemValue: CartItem;
}

@Component({selector: 'qty-dropdown', template: ''})
class MockQtyDropdownComponent {
  @Input() qty: string;
  @Input() id: string;
}

describe('CartItemComponent', () => {
  let component: TestCartItemWrapper;
  let fixture: ComponentFixture<TestCartItemWrapper>;
  let cartItemComponent;
  let qtyDropdownComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

    component.cartItemValue = mockCartItem;
    cartItemComponent = fixture.debugElement.query(By.css('cart-item'));
    qtyDropdownComponent = fixture.debugElement.query(By.css('qty-dropdown'));

    fixture.detectChanges();
  });

  describe('when cart has a cartItem', () => {
    
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('renders a cart-item', () => {
      expect(fixture.debugElement.query(By.css('.cart-item'))).not.toBeNull();
    });

    it('can be passed a CartItem object', () => {
      expect(cartItemComponent.componentInstance.item).toEqual(mockCartItem);
    });

    it('renders a <qty-dropdown>', () => {
      expect(qtyDropdownComponent).not.toBeNull();
    });
    
    describe('on <qty-dropdown>', () => {
      
      it('sets qty', () => {
        expect(qtyDropdownComponent.componentInstance.qty).toEqual(mockCartItem.qty);
      });
      
      it('sets id', () => {
        expect(qtyDropdownComponent.componentInstance.id).toEqual(mockCartItem.item_id);
      });
    });
  });
});
