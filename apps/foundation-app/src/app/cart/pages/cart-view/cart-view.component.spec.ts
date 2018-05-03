import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CartViewComponent } from './cart-view.component';

import { Cart } from '@daffodil/core';
import { CartFactory } from '@daffodil/core';

let cartFactory = new CartFactory();
let carts$ = of(new Array(cartFactory.create()));

@Component({
  selector: '[cart-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'CartContainer'
})
class CartContainerMock {
  carts$: Observable<Cart[]> = carts$;
}

@Component({
  selector: 'cart',
  template: ''
})
class CartMock { 
  @Input() carts: Cart[];
}

describe('CartViewComponent', () => {
  let component: CartViewComponent;
  let fixture: ComponentFixture<CartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CartViewComponent,
        CartContainerMock,
        CartMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on cart', () => {
    
    it('should set carts to value passed by cart-container directive', () => {
      let cartList = fixture.debugElement.query(By.css('cart'));
      
      carts$.subscribe((carts) => {
        expect(cartList.componentInstance.carts).toEqual(carts);
      });
    });
  });
});
