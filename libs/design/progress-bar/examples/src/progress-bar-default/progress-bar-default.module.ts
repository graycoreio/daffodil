import { NgModule } from '@angular/core';

import { DaffProgressBarModule } from '@daffodil/design/progress-bar';

import { ProgressBarDefaultComponent } from './progress-bar-default.component';

@NgModule({
  declarations: [
    ProgressBarDefaultComponent,
  ],
  exports: [
    ProgressBarDefaultComponent,
  ],
  imports: [
    DaffProgressBarModule,
  ],
})
export class ProgressBarDefaultComponentModule { }
