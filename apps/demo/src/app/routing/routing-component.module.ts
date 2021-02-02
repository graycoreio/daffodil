import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffProgressIndicatorModule } from '@daffodil/design';

import { DemoIndicatorComponent } from './indicator/indicator.component';


@NgModule({
  imports: [
    CommonModule,
    DaffProgressIndicatorModule,
  ],
  declarations: [
    DemoIndicatorComponent,
  ],
  exports: [
    DemoIndicatorComponent,
  ],
})
export class DemoRoutingComponentModule { }
