import { NgModule } from '@angular/core';
import { DaffCheckboxModule } from '@daffodil/design';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CheckboxComponent } from './checkbox.component';
import { DesignLandCheckboxRoutingModule } from './checkbox-routing.module';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';


@NgModule({
  declarations: [
    CheckboxComponent,
  ],
  imports: [
    DesignLandExampleViewerModule,
    DesignLandCheckboxRoutingModule,
    DaffCheckboxModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class CheckboxModule {

}
