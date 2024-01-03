import { NgModule } from '@angular/core';

import { DaffInputModule } from '@daffodil/design';
import { DaffFormFieldModule } from '@daffodil/design/forms/form-field';

import { BasicInputComponent } from './basic-input.component';

@NgModule({
  imports: [
    DaffFormFieldModule,
    DaffInputModule,
  ],
  declarations: [
    BasicInputComponent,
  ],
})
export class BasicInputModule {

}
