import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffFormFieldModule,
  DaffInputModule,
} from '@daffodil/design';

import { InputErrorComponent } from './input-error.component';

@NgModule({
  imports: [
    DaffFormFieldModule,
    DaffInputModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InputErrorComponent,
  ],
})
export class InputErrorModule {

}
