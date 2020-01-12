import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable ,  of } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffContainerModule, DaffLoadingIconModule } from '@daffodil/design';

import { DemoCartViewComponent } from './cart-view.component';

const cartFactory = new DaffCartFactory();
const cart = cartFactory.create();

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[cart-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'CartContainer'
})
class MockCartContainerComponent {
  cart$: Observable<DaffCart> = of(cart);
  loading$: Observable<boolean> = of(false);
}

@Component({
  selector: 'demo-cart',
  template: ''
})
class MockCartWrapperComponent {
  @Input() cart: DaffCart;
}

describe('DemoCartViewComponent', () => {
  let component: DemoCartViewComponent;
  let fixture: ComponentFixture<DemoCartViewComponent>;
  let cartContainer: MockCartContainerComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DemoCartViewComponent,
        MockCartContainerComponent,
        MockCartWrapperComponent,
      ],
      imports: [
        DaffContainerModule,
        DaffLoadingIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCartViewComponent);
    component = fixture.componentInstance;

    cartContainer = fixture.debugElement.query(By.css('[cart-container]')).componentInstance;
    cartContainer.loading$ = of(false);

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

  describe('when CartContainer.loading$ is true', () => {

    let loadingIcon;
    let cartWrapper;

    beforeEach(() => {
      cartContainer.loading$ = of(true);
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

  describe('when CartContainer.loading$ is false', () => {

    let loadingIcon;
    let cartWrapper;

    beforeEach(() => {
      cartContainer.loading$ = of(false);
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

  describe('on <daff-container>', () => {
    it('should set size="md"', () => {
      const container = fixture.debugElement.query(By.css('daff-container'));

      expect(container.componentInstance.size).toEqual('md');
    });
  });
});
