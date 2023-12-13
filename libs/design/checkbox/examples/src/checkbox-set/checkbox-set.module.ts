import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffCheckboxModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

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
