import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffProgressIndicatorModule } from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
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
    DesignLandExampleViewerModule,
  ],
})
export class DesignLandProgressIndicatorModule { }
