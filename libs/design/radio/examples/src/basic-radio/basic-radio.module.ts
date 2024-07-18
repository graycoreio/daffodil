import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffRadioModule } from '@daffodil/design';

import { BasicRadioComponent } from './basic-radio.component';

@NgModule({

  declarations: [
    BasicRadioComponent,
  ],
  exports: [
    BasicRadioComponent,
  ],
  imports: [
    DaffRadioModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class BasicRadioModule { }
