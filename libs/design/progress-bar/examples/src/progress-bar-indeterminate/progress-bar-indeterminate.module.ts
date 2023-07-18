import { NgModule } from '@angular/core';

import { DaffProgressBarModule } from '@daffodil/design/progress-bar';

import { ProgressBarIndeterminateComponent } from './progress-bar-indeterminate.component';

@NgModule({
  declarations: [
    ProgressBarIndeterminateComponent,
  ],
  exports: [
    ProgressBarIndeterminateComponent,
  ],
  imports: [
    DaffProgressBarModule,
  ],
})
export class ProgressBarIndeterminateComponentModule { }
