import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffButtonModule,
  DaffCheckboxModule,
} from '@daffodil/design';

import { BasicCheckboxComponent } from './basic-checkbox.component';


@NgModule({
  declarations: [
    BasicCheckboxComponent,
  ],
  exports: [
    BasicCheckboxComponent,
  ],
  imports: [
    DaffCheckboxModule,
    DaffButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class BasicCheckboxModule { }
