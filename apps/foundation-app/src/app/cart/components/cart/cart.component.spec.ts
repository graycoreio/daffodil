import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartFactory } from '@daffodil/core';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartFactory = new CartFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;

    component.cart = cartFactory.create();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a cart-container', () => {
    expect(fixture.debugElement.query(By.css('.cart-container'))).toBeDefined();
  });
});
