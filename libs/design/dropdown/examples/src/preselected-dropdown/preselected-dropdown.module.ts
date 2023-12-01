import { NgModule } from '@angular/core';

import { DaffDropdownModule } from '@daffodil/design';

import { PreselectedDropdownComponent } from './preselected-dropdown.component';

@NgModule({
  declarations: [
    PreselectedDropdownComponent,
  ],
  exports: [
    PreselectedDropdownComponent,
  ],
  imports: [
    DaffDropdownModule,
  ],
})
export class PreselectedDropdownModule { }
