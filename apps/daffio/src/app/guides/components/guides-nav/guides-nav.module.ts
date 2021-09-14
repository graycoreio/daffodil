import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffTreeModule } from '@daffodil/design/tree';

import { DaffioGuidesNavComponent } from './guides-nav.component';

@NgModule({
  declarations: [
    DaffioGuidesNavComponent,
  ],
  exports: [
    DaffioGuidesNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DaffTreeModule,
  ],
})
export class DaffioGuidesNavModule { }
