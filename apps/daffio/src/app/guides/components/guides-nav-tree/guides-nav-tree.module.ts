import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffListModule,
  DaffLinkSetModule,
  DaffAccordionModule,
} from '@daffodil/design';

import { DaffioGuidesNavTreeComponent } from './guides-nav-tree.component';


@NgModule({
  declarations: [
    DaffioGuidesNavTreeComponent,
  ],
  exports: [
    DaffioGuidesNavTreeComponent,
  ],
  imports: [
    CommonModule,
    DaffLinkSetModule,
    DaffListModule,
    RouterModule,
    DaffAccordionModule,
  ],
})
export class DaffioGuidesNavTreeModule { }
