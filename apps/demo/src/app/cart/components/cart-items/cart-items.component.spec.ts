import {
  Component,
  Input,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';

import {
  DaffCart,
  DaffCartItem,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';

import { CartItemsComponent } from './cart-items.component';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  template: '<demo-cart-items [cart]="cartValue"></demo-cart-items>',
  imports: [CartItemsComponent],
})
class WrapperComponent {
  cartValue: DaffCart;
}

@Component({
  selector: 'demo-cart-item', template: '',
})
class MockCartItemComponent {
  @Input() item: DaffCartItem;
}

describe('CartItemsComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartItems;
  let cart: CartItemsComponent;

  let cartFactory: DaffCartFactory;
  let mockCart: DaffCart;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CartItemsComponent,
        WrapperComponent,
        MockCartItemComponent,
      ],
      providers: [
        provideMockStore({}),
      ],
    });
    TestBed.overrideComponent(CartItemsComponent, {
      remove: { imports: [CartItemComponent]},
      add: { imports: [MockCartItemComponent]},
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);

    mockCart = cartFactory.create({
      items: new DaffCartItemFactory().createMany(2),
    });

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    wrapper.cartValue = mockCart;

    fixture.detectChanges();
    cartItems = fixture.debugElement.queryAll(By.css('demo-cart-item'));
    cart = fixture.debugElement.query(By.css('demo-cart-items')).componentInstance;
  });

  it('should create', () => {
    expect(cart).toBeTruthy();
  });

  it('can be passed a Cart object', () => {
    expect(cart.cart).toEqual(mockCart);
  });

  it('renders a <demo-cart-item> for every cart.items', () => {
    expect(cartItems.length).toEqual(mockCart.items.length);
  });

  describe('on <demo-cart-item>', () => {

    it('should set item', () => {
      mockCart.items.forEach((item, index) => {
        expect(cartItems[index].componentInstance.item).toEqual(item);
      });
    });
  });
});
