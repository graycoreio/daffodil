import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffContainerModule, DaffAccordionModule, DaffLoadingIconModule } from '@daffodil/design';
import { StateCheckoutModule } from '@daffodil/state';

import { CartSummaryWrapperModule } from '../cart/components/cart-summary-wrapper/cart-summary-wrapper.module';
import { ThankYouViewComponent } from './pages/thank-you-view.component';
import { ThankYouComponentModule } from './components/thank-you/thank-you.module';

@NgModule({
  imports: [
    CommonModule,
    ThankYouComponentModule,
    DaffContainerModule,
    CartSummaryWrapperModule,
    DaffAccordionModule,
    DaffLoadingIconModule,
    StateCheckoutModule
  ],
  declarations: [
    ThankYouViewComponent
  ],
  exports: [
    ThankYouViewComponent
  ]
})
export class ThankYouModule { }
