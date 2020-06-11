import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffRadioModule } from '@daffodil/design';

import { RadioComponent } from './radio.component';
import { DesignLandRadioRoutingModule } from './radio-routing.module';
import { RADIO_EXAMPLES_MODULES } from '../../../../../libs/design/radio/examples/examples';



@NgModule({
  exports:[
    RadioComponent,
    DesignLandRadioRoutingModule
  ],
  declarations: [
    RadioComponent
  ],
  imports: [
    CommonModule,
    DaffRadioModule,
    ReactiveFormsModule,
    ...RADIO_EXAMPLES_MODULES
  ]
})
export class RadioModule { }
