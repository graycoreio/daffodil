import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffContainerModule, DaffContainerComponent } from '@daffodil/design';
import { Cart } from '@daffodil/core';
import { DaffAccordionModule, DaffAccordionItemComponent } from '@daffodil/design';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/core/testing';

import { ThankYouViewComponent } from './thank-you-view.component';

const cartFactory = new DaffCartFactory();
const cartItemFactory = new DaffCartItemFactory();
const stubCart: Cart = cartFactory.create({items: [cartItemFactory.create()]})

@Component({selector: 'demo-thank-you', template: ''})
class MockThankYouComponent {}

// tslint:disable-next-line: component-selector
@Component({selector: '[cart-container]', template: '<ng-content></ng-content>', exportAs: 'CartContainer'})
class MockCartContainer {
  cart$: Observable<Cart> = of(stubCart);
  loading$: Observable<boolean> = of(false);
}

@Component({selector: 'demo-cart-summary-wrapper', template: '<ng-content>', encapsulation: ViewEncapsulation.None})
class MockCartSummaryWrapperComponent {
  @Input() cart: Cart;
  @Input() loading: boolean;
  @Input() cartTitle: string;
}

@Component({ selector: 'demo-loading-icon', template: ''})
class MockLoadingIconComponent {}

describe('ThankYouViewComponent', () => {
  let component: ThankYouViewComponent;
  let fixture: ComponentFixture<ThankYouViewComponent>;
  let daffContainer: DaffContainerComponent;
  let cartSummaryWrappers;
  let accordionItem: DaffAccordionItemComponent;
  let cartContainer: MockCartContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffContainerModule,
        DaffAccordionModule,
        NoopAnimationsModule
      ],
      declarations: [ 
        ThankYouViewComponent,
        MockThankYouComponent,
        MockCartContainer,
        MockCartSummaryWrapperComponent,
        MockLoadingIconComponent
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
    cartContainer = fixture.debugElement.query(By.css('[cart-container]')).componentInstance;
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
      expect(fixture.debugElement.query(By.css('[daff-accordion-item-title]')).nativeElement.innerHTML).toEqual('Cart Summary (1)');
    });
  });

  describe('when CartContainer.loading$ is true', () => {

    let thankYouElement;
    let loadingIcon;

    beforeEach(() => {
      cartContainer.loading$ = of(true);
      fixture.detectChanges();

      thankYouElement = fixture.debugElement.query(By.css('.thank-you'));
      loadingIcon = fixture.debugElement.query(By.css('demo-loading-icon'));
    });
    
    it('should not render thankYouElement', () => {
      expect(thankYouElement).toBeNull();
    });

    it('should render loadingIcon', () => {
      expect(loadingIcon).not.toBeNull();
    });
  });

  describe('when CartContainer.loading$ is false', () => {

    let thankYouElement;
    let loadingIcon;

    beforeEach(() => {
      cartContainer.loading$ = of(false);
      fixture.detectChanges();

      thankYouElement = fixture.debugElement.query(By.css('.thank-you'));
      loadingIcon = fixture.debugElement.query(By.css('demo-loading-icon'));
    });
    
    it('should render thank-you', () => {
      expect(thankYouElement).not.toBeNull();
    });

    it('should not render loadingIcon', () => {
      expect(loadingIcon).toBeNull();
    });
  });
});
