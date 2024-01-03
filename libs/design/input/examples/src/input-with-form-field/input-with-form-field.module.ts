import { NgModule } from '@angular/core';

import { DaffInputModule } from '@daffodil/design';
import { DaffFormFieldModule } from '@daffodil/design/forms/form-field';

import { InputWithFormFieldComponent } from './input-with-form-field.component';

@NgModule({
  imports: [
    DaffFormFieldModule,
    DaffInputModule,
  ],
  declarations: [
    InputWithFormFieldComponent,
  ],
})
export class InputWithFormFieldModule {

}
