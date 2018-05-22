import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory, Cart } from '@daffodil/core';

import { CartTaxComponent } from './cart-tax.component';
import { Component } from '@angular/core';

let cartFactory = new CartFactory();
let mockCart = cartFactory.create();

@Component({template: '<cart-tax [cart]="cartValue"></cart-tax>'})
class TestCartTaxWrapper {
  cartValue: Cart;
}

describe('CartTaxComponent', () => {
  let component: TestCartTaxWrapper;
  let fixture: ComponentFixture<TestCartTaxWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartTaxComponent,
        TestCartTaxWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartTaxWrapper);
    component = fixture.componentInstance;

    component.cartValue = mockCart;

    fixture.detectChanges();
  });

  it('can be passed a Cart object', () => {
    let cartTaxComponent = fixture.debugElement.query(By.css('cart-tax'));

    expect(cartTaxComponent.componentInstance.cart).toEqual(mockCart);
  });
});
