import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandCheckboxRoutingModule } from './checkbox-routing.module';
import { DesignLandCheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [
    DesignLandCheckboxComponent,
  ],
  imports: [
    DesignLandExampleViewerModule,
    DesignLandCheckboxRoutingModule,
    CommonModule,
  ],
})
export class DesignLandCheckboxModule {

}
