import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, Cart } from '@daffodil/core';

import { CartComponent } from './cart.component';
import { Component } from '@angular/core';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();

@Component({template: '<cart [cart]="cartValue"></cart>'})
class TestCartWrapper {
  cartValue: Cart;
}

describe('CartComponent', () => {
  let component: TestCartWrapper;
  let fixture: ComponentFixture<TestCartWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        TestCartWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartWrapper);
    component = fixture.componentInstance;

    component.cartValue = mockCart;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a cart-container', () => {
    expect(fixture.debugElement.query(By.css('.cart-container'))).toBeDefined();
  });

  it('can be passed a Cart object', () => {
    let cartComponent = fixture.debugElement.query(By.css('cart'));

    expect(cartComponent.componentInstance.cart).toEqual(mockCart);
  });
});
