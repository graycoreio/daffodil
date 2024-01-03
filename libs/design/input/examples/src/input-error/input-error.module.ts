import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffInputModule } from '@daffodil/design';
import { DaffFormFieldModule } from '@daffodil/design/forms/form-field';

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
