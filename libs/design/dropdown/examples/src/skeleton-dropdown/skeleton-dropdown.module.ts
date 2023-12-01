import { NgModule } from '@angular/core';

import { DaffDropdownModule } from '@daffodil/design';

import { SkeletonDropdownComponent } from './skeleton-dropdown.component';

@NgModule({
  declarations: [
    SkeletonDropdownComponent,
  ],
  exports: [
    SkeletonDropdownComponent,
  ],
  imports: [
    DaffDropdownModule,
  ],
})
export class SkeletonDropdownModule { }
