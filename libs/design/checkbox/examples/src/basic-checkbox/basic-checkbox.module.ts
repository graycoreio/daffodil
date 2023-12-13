import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffCheckboxModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

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
