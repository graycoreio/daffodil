import { NgModule } from '@angular/core';

import {
  DaffFormFieldModule,
  DaffInputModule,
} from '@daffodil/design';

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
