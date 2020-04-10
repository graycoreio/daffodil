import { Component, Input, ViewEncapsulation } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';
import { DaffAccordionModule, 
  DaffAccordionItemComponent, 
  DaffLoadingIconModule,
  DaffContainerModule, 
  DaffContainerComponent
} from '@daffodil/design';

import { ThankYouViewComponent } from './thank-you-view.component';

const cartFactory = new DaffCartFactory();
const cartItemFactory = new DaffCartItemFactory();
const stubCart: DaffCart = cartFactory.create({items: [cartItemFactory.create()]})

@Component({selector: 'demo-thank-you', template: ''})
class MockThankYouComponent {}

// tslint:disable-next-line: component-selector
@Component({selector: '[order-container]', template: '<ng-content></ng-content>', exportAs: 'OrderContainer'})
class MockOrderContainer {
  order$: Observable<DaffCart> = of(stubCart);
  loading$: Observable<boolean> = of(false);
}

@Component({selector: 'demo-cart-summary-wrapper', template: '<ng-content>', encapsulation: ViewEncapsulation.None})
class MockCartSummaryWrapperComponent {
  @Input() cart: DaffCart;
  @Input() loading: boolean;
  @Input() cartTitle: string;
}

describe('ThankYouViewComponent', () => {
  let component: ThankYouViewComponent;
  let fixture: ComponentFixture<ThankYouViewComponent>;
  let daffContainer: DaffContainerComponent;
  let cartSummaryWrappers;
  let accordionItem: DaffAccordionItemComponent;
  let orderContainer: MockOrderContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffContainerModule,
        DaffAccordionModule,
        DaffLoadingIconModule,
        NoopAnimationsModule
      ],
      declarations: [ 
        ThankYouViewComponent,
        MockThankYouComponent,
        MockOrderContainer,
        MockCartSummaryWrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    daffContainer = fixture.debugElement.query(By.css('daff-container')).componentInstance;
    cartSummaryWrappers = fixture.debugElement.queryAll(By.css('demo-cart-summary-wrapper'));
    accordionItem = fixture.debugElement.query(By.css('daff-accordion-item')).componentInstance;
    orderContainer = fixture.debugElement.query(By.css('[order-container]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <daff-container>', () => {
    
    it('should set size', () => {
      expect(daffContainer.size).toEqual('md');
    });
  });

  describe('on mobile-cart <demo-cart-summary-wrapper>', () => {
    it('should set cart', () => {
      expect(cartSummaryWrappers[0].componentInstance.cart).toEqual(stubCart);
    });

    it('should set loading', () => {
      expect(cartSummaryWrappers[0].componentInstance.loading).toEqual(false);
    });

    it('should set cartTitle to CART SUMMARY', () => {
      expect(cartSummaryWrappers[0].componentInstance.cartTitle).toBeUndefined();
    });
  });

  describe('on desktop-cart <demo-cart-summary-wrapper>', () => {
    
    it('should set cart', () => {
      expect(cartSummaryWrappers[1].componentInstance.cart).toEqual(stubCart);
    });

    it('should set loading', () => {
      expect(cartSummaryWrappers[1].componentInstance.loading).toEqual(false);
    });

    it('should not set cartTitle', () => {
      expect(cartSummaryWrappers[1].componentInstance.cartTitle).toEqual('CART SUMMARY');
    });
  });

  describe('on <daff-accordion-item>', () => {
    
    it('should set initiallyAction to false', () => {
      expect(accordionItem.initiallyActive).toBeFalsy();
    });
      
    it('should show the number of cart items in the accordion title', () => {
      expect(fixture.debugElement.query(By.css('[daffAccordionItemTitle]')).nativeElement.innerHTML).toEqual('Cart Summary (1)');
    });
  });

  describe('when OrderContainer.loading$ is true', () => {

    let thankYouElement;
    let loadingIcon;

    beforeEach(() => {
      orderContainer.loading$ = of(true);
      fixture.detectChanges();

      thankYouElement = fixture.debugElement.query(By.css('.demo-thank-you'));
      loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));
    });
    
    it('should not render thankYouElement', () => {
      expect(thankYouElement).toBeNull();
    });

    it('should render loadingIcon', () => {
      expect(loadingIcon).not.toBeNull();
    });
  });

  describe('when the cart is loading', () => {

    let thankYouElement;
    let loadingIcon;

    beforeEach(() => {
      orderContainer.loading$ = of(false);
      fixture.detectChanges();

      thankYouElement = fixture.debugElement.query(By.css('.demo-thank-you-view'));
      loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));
    });
    
    it('should render demo-thank-you', () => {
      expect(thankYouElement).not.toBeNull();
    });

    it('should not render loadingIcon', () => {
      expect(loadingIcon).toBeNull();
    });
  });
});
