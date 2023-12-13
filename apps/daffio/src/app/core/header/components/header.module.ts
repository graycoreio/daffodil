import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffNavbarModule } from '@daffodil/design';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioHeaderComponent } from './header/header.component';
import { DaffioHeaderItemDirective } from './header-item/header-item.directive';

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
