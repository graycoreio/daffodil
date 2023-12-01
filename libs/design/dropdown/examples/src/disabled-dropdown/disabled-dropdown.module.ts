import { NgModule } from '@angular/core';

import { DaffDropdownModule } from '@daffodil/design';

import { DisabledDropdownComponent } from './disabled-dropdown.component';

@NgModule({
  declarations: [
    DisabledDropdownComponent,
  ],
  exports: [
    DisabledDropdownComponent,
  ],
  imports: [
    DaffDropdownModule,
  ],
})
export class DisabledDropdownModule { }
