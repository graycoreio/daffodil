import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartStateTestingModule,
  MockDaffCartFacade,
} from '@daffodil/cart/state/testing';
import {
  DaffCheckoutStateTestingModule,
  MockDaffCheckoutPlacedOrderFacade,
} from '@daffodil/checkout/state/testing';
import { DaffOrder } from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';

import { ThankYouViewComponent } from './thank-you-view.component';

describe('ThankYouViewComponent', () => {
  let orderFactory: DaffOrderFactory;
  let mockOrder: DaffOrder;
  let mockFacade: MockDaffCheckoutPlacedOrderFacade;
  let mockCartFacade: MockDaffCartFacade;

  let component: ThankYouViewComponent;
  let fixture: ComponentFixture<ThankYouViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ThankYouViewComponent,
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        DaffTestingCartDriverModule.forRoot(),
        DaffCheckoutStateTestingModule,
        DaffCartStateTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    orderFactory = TestBed.inject(DaffOrderFactory);
    mockFacade = TestBed.inject(MockDaffCheckoutPlacedOrderFacade);
    mockCartFacade = TestBed.inject(MockDaffCartFacade);

    mockOrder = orderFactory.create();
    mockFacade.placedOrder$.next(mockOrder);

    fixture = TestBed.createComponent(ThankYouViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xdescribe('on <daff-accordion-item>', () => {
    it('should show the number of cart items in the accordion title', () => {
      expect(fixture.debugElement.query(By.css('[daffAccordionItemTitle]')).nativeElement.innerHTML).toEqual('Cart Summary (1)');
    });
  });

  xdescribe('when the order is loading', () => {
    let thankYouElement;
    let loadingIcon;

    beforeEach(() => {
      mockCartFacade.orderResultLoading$.next(true);
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

  xdescribe('when the order is not loading', () => {
    let thankYouElement;
    let loadingIcon;

    beforeEach(() => {
      mockCartFacade.orderResultLoading$.next(false);
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
