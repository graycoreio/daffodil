import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffNavbarModule,
  DaffContainerModule,
} from '@daffodil/design';

import { DaffioHeaderItemDirective } from './header-item/header-item.directive';
import { DaffioHeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffNavbarModule,
    DaffContainerModule,
  ],
  declarations: [
    DaffioHeaderComponent,
    DaffioHeaderItemDirective,
  ],
  exports: [
    DaffioHeaderComponent,
    DaffioHeaderItemDirective,
  ],
})
export class DaffioHeaderComponentModule {}
