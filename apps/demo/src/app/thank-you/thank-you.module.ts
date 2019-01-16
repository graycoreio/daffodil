import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankYouViewComponent } from './pages/thank-you-view.component';
import { ThankYouComponentModule } from './components/thank-you/thank-you.module';
import { DaffContainerModule, DaffAccordionModule } from '@daffodil/design';
import { CheckoutCartAsyncWrapperModule } from '../cart/components/checkout-cart-async-wrapper/checkout-cart-async-wrapper.module';
import { LoadingIconModule } from '../core/loading-icon/loading-icon.module';
import { StateCartModule } from '@daffodil/state';

@NgModule({
  imports: [
    CommonModule,
    ThankYouComponentModule,
    DaffContainerModule,
    CheckoutCartAsyncWrapperModule,
    DaffAccordionModule,
    LoadingIconModule,
    StateCartModule
  ],
  declarations: [
    ThankYouViewComponent
  ],
  exports: [
    ThankYouViewComponent
  ]
})
export class ThankYouModule { }
