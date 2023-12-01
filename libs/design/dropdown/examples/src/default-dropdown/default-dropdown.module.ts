import { NgModule } from '@angular/core';

import { DaffDropdownModule } from '@daffodil/design';

import { DefaultDropdownComponent } from './default-dropdown.component';

@NgModule({
  declarations: [
    DefaultDropdownComponent,
  ],
  exports: [
    DefaultDropdownComponent,
  ],
  imports: [
    DaffDropdownModule,
  ],
})
export class DefaultDropdownModule { }
