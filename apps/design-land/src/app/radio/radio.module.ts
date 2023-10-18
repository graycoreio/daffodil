import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesignLandRadioRoutingModule } from './radio-routing.module';
import { DesignLandRadioComponent } from './radio.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandRadioComponent,
  ],
  imports: [
    DesignLandExampleViewerModule,
    DesignLandRadioRoutingModule,
    CommonModule,
  ],
})
export class DesignLandRadioModule {

}
