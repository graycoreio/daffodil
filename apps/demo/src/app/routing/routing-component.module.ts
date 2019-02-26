import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoIndicatorComponent } from './indicator/indicator.component';

import { DaffProgressIndicatorModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffProgressIndicatorModule
  ],
  declarations: [
    DemoIndicatorComponent
  ],
  exports: [
    DemoIndicatorComponent
  ]
})
export class DemoRoutingComponentModule { }
