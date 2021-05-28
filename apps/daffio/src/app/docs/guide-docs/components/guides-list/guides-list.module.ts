import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffListModule,
  DaffLinkSetModule,
  DaffAccordionModule,
} from '@daffodil/design';

import { DaffioGuidesListComponent } from './guides-list.component';


@NgModule({
  declarations: [
    DaffioGuidesListComponent,
  ],
  exports: [
    DaffioGuidesListComponent,
  ],
  imports: [
    CommonModule,
    DaffLinkSetModule,
    DaffListModule,
    RouterModule,
    DaffAccordionModule,
  ],
})
export class DaffioGuidesListModule { }
