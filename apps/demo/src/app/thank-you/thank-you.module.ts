import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankYouViewComponent } from './pages/thank-you-view.component';
import { ThankYouComponentModule } from './components/thank-you/thank-you.module';
import { DaffContainerModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    ThankYouComponentModule,
    DaffContainerModule
  ],
  declarations: [
    ThankYouViewComponent
  ],
  exports: [
    ThankYouViewComponent
  ]
})
export class ThankYouModule { }
