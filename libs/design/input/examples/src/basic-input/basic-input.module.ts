import { NgModule } from '@angular/core';

import {
  DaffFormFieldModule,
  DaffInputModule,
} from '@daffodil/design';

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
