import {
  CommonModule,
  CurrencyPipe,
} from '@angular/common';
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
  DaffCartTotalTypeEnum,
} from '@daffodil/cart';
import {
  DaffCartItemFactory,
  DaffCartFactory,
} from '@daffodil/cart/testing';

import { CartTotalsComponent } from './cart-totals.component';
import { CartTotalsItemComponent } from '../cart-totals-item/cart-totals-item.component';
import { CartTotalsItemModule } from '../cart-totals-item/cart-totals-item.module';

@Component({
  template: '<demo-cart-totals [cart]="cartValue"></demo-cart-totals>',
  standalone: false,
})
class WrapperComponent {
  @Input() cartValue: DaffCart;
}

describe('CartTotalsComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartTotalsComponent: CartTotalsComponent;
  let currencyPipe: CurrencyPipe;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  let mockCart: DaffCart;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        CartTotalsComponent,
      ],
      imports: [
        CartTotalsItemModule,
      ],
      providers: [
        CurrencyPipe,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    currencyPipe = TestBed.inject(CurrencyPipe);

    mockCart = cartFactory.create({
      items: cartItemFactory.createMany(2),
    });
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    wrapper.cartValue = mockCart;

    fixture.detectChanges();
    cartTotalsComponent = fixture.debugElement.query(By.css('demo-cart-totals')).componentInstance;
  });

  it('can be passed a Cart object', () => {
    expect(cartTotalsComponent.cart).toEqual(mockCart);
  });

  describe('on estimated shipping <demo-cart-totals-item>', () => {
    it('should set label', () => {
      expect(fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[1].nativeElement.innerHTML).toContain('Estimated Shipping');
    });

    it('should set value', () => {
      expect(fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[1].nativeElement.innerHTML).toContain(currencyPipe.transform(mockCart.totals[DaffCartTotalTypeEnum.shipping].value));
    });
  });

  describe('on estimated tax on <demo-cart-totals-item>', () => {
    it('should set label', () => {
      expect(fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[2].nativeElement.innerHTML).toContain('Estimated Tax');
    });

    it('should set value', () => {
      expect(fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[2].nativeElement.innerHTML).toContain(currencyPipe.transform(mockCart.totals[DaffCartTotalTypeEnum.tax].value));
    });
  });

  describe('on subtotal <demo-cart-totals-item>', () => {
    it('should set label', () => {
      expect(fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[0].nativeElement.innerHTML).toContain('Subtotal');
    });

    it('should set value', () => {
      expect(fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[0].nativeElement.innerHTML).toContain(currencyPipe.transform(mockCart.totals[DaffCartTotalTypeEnum.subtotalExcludingTax].value));
    });
  });

  describe('on estimated total <demo-cart-totals-item>', () => {
    it('should set label', () => {
      expect(fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[3].nativeElement.innerHTML).toContain('Estimated Total');
    });

    it('should set value', () => {
      expect(fixture.debugElement.queryAll(By.css('demo-cart-totals-item'))[3].nativeElement.innerHTML).toContain(currencyPipe.transform(mockCart.totals[DaffCartTotalTypeEnum.grandTotal].value));
    });
  });
});
