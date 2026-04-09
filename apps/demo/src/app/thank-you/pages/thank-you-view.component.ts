import {
  Component,
  OnInit,
} from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { DaffCartFacade } from '@daffodil/cart/state';
import { DaffCheckoutPlacedOrderFacade } from '@daffodil/checkout/state';
import { DAFF_ACCORDION_COMPONENTS } from '@daffodil/design/accordion';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_LOADING_ICON_COMPONENTS } from '@daffodil/design/loading-icon';
import { DaffOrder } from '@daffodil/order';

import { CartSummaryWrapperComponent } from '../../cart/components/cart-summary-wrapper/cart-summary-wrapper.component';
import { ThankYouComponent } from '../components/thank-you/thank-you.component';


@Component({
  templateUrl: './thank-you-view.component.html',
  styleUrls: ['./thank-you-view.component.scss'],
  imports: [
    LetDirective,
    ThankYouComponent,
    DAFF_CONTAINER_COMPONENTS,
    CartSummaryWrapperComponent,
    DAFF_ACCORDION_COMPONENTS,
    DAFF_LOADING_ICON_COMPONENTS,
  ],
})
export class ThankYouViewComponent implements OnInit {
  order$: Observable<DaffOrder>;
  loading$: Observable<boolean>;

  constructor(
    private facade: DaffCheckoutPlacedOrderFacade,
    private cartFacade: DaffCartFacade,
  ) { }

  ngOnInit() {
    this.order$ = this.facade.placedOrder$;
    this.loading$ = this.cartFacade.orderResultLoading$;
  }
}
