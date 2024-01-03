import { NgModule } from '@angular/core';

import { DaffInputModule } from '@daffodil/design';
import { DaffFormFieldModule } from '@daffodil/design/forms/form-field';

import { InputDisabledComponent } from './input-disabled.component';

@NgModule({
  imports: [
    DaffFormFieldModule,
    DaffInputModule,
  ],
  declarations: [
    InputDisabledComponent,
  ],
})
export class InputDisabledModule {

}
