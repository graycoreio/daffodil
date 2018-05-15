import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, CartItem } from '@daffodil/core';

import { CartItemComponent } from './cart-item.component';
import { Component } from '@angular/core';

let cartFactory = new CartFactory();
let mockCartItem = cartFactory.create().items[0];

@Component({template: '<cart-item [item]="cartItemValue"></cart-item>'})
class TestCartItemWrapper {
  cartItemValue: CartItem;
}

describe('CartItemComponent', () => {
  let component: TestCartItemWrapper;
  let fixture: ComponentFixture<TestCartItemWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartItemComponent,
        TestCartItemWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartItemWrapper);
    component = fixture.componentInstance;

    component.cartItemValue = mockCartItem;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a cart-item', () => {
    expect(fixture.debugElement.query(By.css('.cart-item'))).not.toBeNull();
  });

  it('can be passed a CartItem object', () => {
    let cartItemComponent = fixture.debugElement.query(By.css('cart-item'));

    expect(cartItemComponent.componentInstance.item).toEqual(mockCartItem);
  });
});
