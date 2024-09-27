import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { DaffCartFacade } from '@daffodil/cart/state';
import { DaffCheckoutPlacedOrderFacade } from '@daffodil/checkout/state';
import { DAFF_ACCORDION_COMPONENTS } from '@daffodil/design/accordion';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';
import { DaffOrder } from '@daffodil/order';

import { CartSummaryWrapperModule } from '../../cart/components/cart-summary-wrapper/cart-summary-wrapper.module';
import { ThankYouComponent } from '../components/thank-you/thank-you.component';


@Component({
  templateUrl: './thank-you-view.component.html',
  styleUrls: ['./thank-you-view.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LetDirective,
    ThankYouComponent,
    DaffContainerModule,
    CartSummaryWrapperModule,
    DAFF_ACCORDION_COMPONENTS,
    DaffLoadingIconModule,
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
