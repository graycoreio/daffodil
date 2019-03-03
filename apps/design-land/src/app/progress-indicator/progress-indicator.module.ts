import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIndicatorComponent } from './progress-indicator.component';

import { DaffProgressIndicatorModule } from '@daffodil/design';
import { DesignLandProgressIndicatorRoutingModule } from './progress-indicator-routing.module';

@NgModule({
  declarations: [
    ProgressIndicatorComponent,
  ],
  imports: [
    CommonModule,
    DaffProgressIndicatorModule,
    DesignLandProgressIndicatorRoutingModule
  ]
})
export class ProgressIndicatorModule { }
