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

import {
  DaffCart,
  DaffCartItem,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';

import { CartItemsComponent } from './cart-items.component';

@Component({
  template: '<demo-cart-items [cart]="cartValue"></demo-cart-items>',
  standalone: false,
})
class WrapperComponent {
  cartValue: DaffCart;
}

@Component({
  selector: 'demo-cart-item', template: '',
  standalone: false,
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
      declarations: [
        CartItemsComponent,
        WrapperComponent,
        MockCartItemComponent,
      ],
    })
      .compileComponents();
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
