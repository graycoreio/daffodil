import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffButtonModule,
  DaffCheckboxModule,
} from '@daffodil/design';

import { CheckboxSetComponent } from './checkbox-set.component';

@NgModule({

  declarations: [
    CheckboxSetComponent,
  ],
  exports: [
    CheckboxSetComponent,
  ],
  imports: [
    DaffCheckboxModule,
    DaffButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class CheckboxSetModule { }
