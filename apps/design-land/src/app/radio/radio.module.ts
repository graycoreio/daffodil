import { NgModule } from '@angular/core';
import {
  DaffRadioModule,
  DaffButtonModule,
} from '@daffodil/design';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RadioComponent } from './radio.component';
import { DesignLandRadioRoutingModule } from './radio-routing.module';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    RadioComponent,
  ],
  imports: [
    DesignLandExampleViewerModule,
    DesignLandRadioRoutingModule,
    DaffRadioModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class RadioModule {

}
