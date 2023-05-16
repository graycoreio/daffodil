import { NgModule } from '@angular/core';

import {
  DaffFormFieldModule,
  DaffInputModule,
} from '@daffodil/design';

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
