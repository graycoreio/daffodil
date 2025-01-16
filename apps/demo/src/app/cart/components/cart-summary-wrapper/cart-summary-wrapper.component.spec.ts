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
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  Observable ,
  of,
} from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

import { CartSummaryWrapperComponent } from './cart-summary-wrapper.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';

let cartFactory: DaffCartFactory;
let cart: DaffCart;
const stubCartTitle = 'cartTitle';

@Component({
  template: '<demo-cart-summary-wrapper [cartTitle]="cartTitleValue" [cart]="cartValue$ | async" [loading]="loadingValue$ | async"><div class="transcluded-content"></div></demo-cart-summary-wrapper>',
  standalone: false,
})
class WrapperComponent {
  cartValue$: Observable<DaffCart>;
  loadingValue$: Observable<boolean>;
  cartTitleValue: string;
}

@Component({
  selector: 'demo-cart-summary',
  template: '',
  standalone: false,
})
class MockCartSummaryComponent {
  @Input() cart: DaffCart;
  @Input() title: string;
}

@Component({
  selector: 'demo-cart-totals',
  template: '',
  standalone: false,
})
class MockCartTotalsComponent {
  @Input() cart: DaffCart;
}

@Component({
  selector: 'demo-help-box',
  template: '',
  standalone: false,
})
class MockHelpBoxComponent {}

describe('CartSummaryWrapper', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartSummaryWrapperComponent: CartSummaryWrapperComponent;
  let cartSummaryComponent: CartSummaryComponent;
  let cartTotalsComponent: MockCartTotalsComponent;
  let helpBoxComponent: MockHelpBoxComponent;
  let router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffLoadingIconModule,
      ],
      declarations: [
        WrapperComponent,
        CartSummaryWrapperComponent,
        MockCartTotalsComponent,
        MockHelpBoxComponent,
        MockCartSummaryComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);

    cart = cartFactory.create();

    fixture = TestBed.createComponent(WrapperComponent);
    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    wrapper = fixture.componentInstance;
    wrapper.cartValue$ = of(cart);
    wrapper.loadingValue$ = of(false);
    wrapper.cartTitleValue = stubCartTitle;

    cartSummaryWrapperComponent = fixture.debugElement.query(By.css('demo-cart-summary-wrapper')).componentInstance;

    fixture.detectChanges();

    cartSummaryComponent = fixture.debugElement.query(By.css('demo-cart-summary')).componentInstance;
    cartTotalsComponent = fixture.debugElement.query(By.css('demo-cart-totals')).componentInstance;
    helpBoxComponent = fixture.debugElement.query(By.css('demo-help-box')).componentInstance;
  });

  it('should create', () => {
    expect(cartSummaryWrapperComponent).toBeTruthy();
  });

  it('should be able to take cart as input', () => {
    expect(cartSummaryWrapperComponent.cart).toEqual(cart);
  });

  it('should be able to take loading as input', () => {
    expect(cartSummaryWrapperComponent.loading).toEqual(false);
  });

  it('should be able to take cartTitle as input', () => {
    expect(cartSummaryWrapperComponent.cartTitle).toEqual(stubCartTitle);
  });

  it('should be able to take transcluded content', () => {
    expect(fixture.debugElement.query(By.css('.transcluded-content'))).not.toBeNull();
  });

  describe('on <demo-cart-summary>', () => {

    it('should set cart to value passed by cart-container directive', () => {
      expect(cartSummaryComponent.cart).toEqual(cart);
    });

    it('should set title', () => {
      expect(cartSummaryComponent.title).toEqual(stubCartTitle);
    });
  });

  describe('on <demo-cart-totals>', () => {

    it('should set cart to value passed by the cart-container directive', () => {
      expect(cartTotalsComponent.cart).toEqual(cart);
    });
  });

  describe('when the cart is not loading', () => {

    it('should render <demo-cart-summary>', () => {
      expect(cartSummaryComponent).not.toBeNull();
    });

    it('should render <demo-cart-totals>', () => {
      const cartTotalsComponentElement = fixture.debugElement.query(By.css('demo-cart-totals'));
      expect(cartTotalsComponentElement).not.toBeNull();
    });

    it('should render <demo-help-box>', () => {
      expect(helpBoxComponent).not.toBeNull();
    });

    it('should not render loading-icon', () => {
      const loadingIconElement = fixture.debugElement.query(By.css('.cart-container__loading-icon'));

      expect(loadingIconElement).toBeNull();
    });
  });

  describe('when the cart is loading', () => {

    beforeEach(() => {
      wrapper.loadingValue$ = of(true);
      fixture.detectChanges();
    });

    it('should not render <demo-cart-summary>', () => {
      const cartSummaryElement = fixture.debugElement.query(By.css('demo-cart-summary'));
      expect(cartSummaryElement).toBeNull();
    });

    it('should not render <demo-cart-totals>', () => {
      const cartTotalsComponentElement = fixture.debugElement.query(By.css('demo-cart-totals'));
      expect(cartTotalsComponentElement).toBeNull();
    });

    it('should not render <demo-help-box>', () => {
      const helpBoxComponentElement = fixture.debugElement.query(By.css('demo-help-box'));
      expect(helpBoxComponentElement).toBeNull();
    });

    it('should render demo-loading-icon', () => {
      const loadingIcon = fixture.debugElement.query(By.css('.demo-cart-summary-wrapper__loading-icon'));

      expect(loadingIcon).not.toBeNull();
    });
  });
});
