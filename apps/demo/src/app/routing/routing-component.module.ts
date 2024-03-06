import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffProgressBarModule } from '@daffodil/design/progress-bar';

import { DemoIndicatorComponent } from './indicator/indicator.component';


@NgModule({
  imports: [
    CommonModule,
    DaffProgressBarModule,
  ],
  declarations: [
    DemoIndicatorComponent,
  ],
  exports: [
    DemoIndicatorComponent,
  ],
})
export class DemoRoutingComponentModule { }
