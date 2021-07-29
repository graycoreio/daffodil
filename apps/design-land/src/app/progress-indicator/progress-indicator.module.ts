import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffProgressIndicatorModule } from '@daffodil/design';

import { DesignLandProgressIndicatorRoutingModule } from './progress-indicator-routing.module';
import { DesignLandProgressIndicatorComponent } from './progress-indicator.component';

@NgModule({
  declarations: [
    DesignLandProgressIndicatorComponent,
  ],
  imports: [
    CommonModule,
    DaffProgressIndicatorModule,
    DesignLandProgressIndicatorRoutingModule,
  ],
})
export class DesignLandProgressIndicatorModule { }
