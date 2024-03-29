import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StateCheckoutModule } from '@daffodil/checkout';
import { DaffAccordionModule } from '@daffodil/design/accordion';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

import { ThankYouComponentModule } from './components/thank-you/thank-you.module';
import { ThankYouViewComponent } from './pages/thank-you-view.component';
import { CartSummaryWrapperModule } from '../cart/components/cart-summary-wrapper/cart-summary-wrapper.module';

@NgModule({
  imports: [
    CommonModule,
    ThankYouComponentModule,
    DaffContainerModule,
    CartSummaryWrapperModule,
    DaffAccordionModule,
    DaffLoadingIconModule,
    StateCheckoutModule,
  ],
  declarations: [
    ThankYouViewComponent,
  ],
  exports: [
    ThankYouViewComponent,
  ],
})
export class ThankYouModule { }
