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
import { BehaviorSubject } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartStateTestingModule,
  MockDaffCartFacade,
} from '@daffodil/cart/state/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

import { DemoCartViewComponent } from './cart-view.component';

@Component({
  selector: 'demo-cart',
  template: '',
  standalone: false,
})
class MockCartWrapperComponent {
  @Input() cart: DaffCart;
}

describe('DemoCartViewComponent', () => {
  let component: DemoCartViewComponent;
  let fixture: ComponentFixture<DemoCartViewComponent>;
  let cartFacade: MockDaffCartFacade;
  let cartFactory: DaffCartFactory;
  let cart: DaffCart;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DemoCartViewComponent,
        MockCartWrapperComponent,
      ],
      imports: [
        DaffContainerModule,
        DaffLoadingIconModule,
        DaffCartStateTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    cartFactory = TestBed.inject(DaffCartFactory);

    cart = cartFactory.create();

    fixture = TestBed.createComponent(DemoCartViewComponent);
    component = fixture.componentInstance;
    cartFacade = TestBed.inject(MockDaffCartFacade);

    cartFacade.cart$ = new BehaviorSubject(cart);
    cartFacade.loading$ = new BehaviorSubject(false);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <demo-cart>', () => {

    let cartWrapperComponent;

    beforeEach(() => {
      cartWrapperComponent = fixture.debugElement.query(By.css('demo-cart'));
    });

    it('should set cart to value passed by cart-container directive', () => {
      expect(cartWrapperComponent.componentInstance.cart).toEqual(cart);
    });
  });

  describe('when the cart is loading', () => {

    let loadingIcon;
    let cartWrapper;

    beforeEach(() => {
      cartFacade.loading$.next(true);
      fixture.detectChanges();

      cartWrapper = fixture.debugElement.query(By.css('demo-cart'));
      loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));
    });

    it('should not render demo-cart', () => {
      expect(cartWrapper).toBeNull();
    });

    it('should render daff-loading-icon', () => {
      expect(loadingIcon).not.toBeNull();
    });
  });

  describe('when the cart is not loading', () => {

    let loadingIcon;
    let cartWrapper;

    beforeEach(() => {
      cartFacade.loading$.next(false);
      fixture.detectChanges();

      cartWrapper = fixture.debugElement.query(By.css('demo-cart'));
      loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));
    });

    it('should render demo-cart', () => {
      expect(cartWrapper).not.toBeNull();
    });

    it('should not render daff-loading-icon', () => {
      expect(loadingIcon).toBeNull();
    });
  });
});
