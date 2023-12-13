import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffNavbarModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';

import { BasicNavbarComponent } from './basic-navbar.component';

@NgModule({
  declarations: [
    BasicNavbarComponent,
  ],
  imports: [
    CommonModule,

    DaffNavbarModule,
    DaffButtonModule,
    DaffContainerModule,
  ],
})
export class BasicNavbarModule { }
