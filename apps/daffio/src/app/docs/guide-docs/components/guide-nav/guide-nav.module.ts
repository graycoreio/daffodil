import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffListModule,
  DaffLinkSetModule,
  DaffAccordionModule,
} from '@daffodil/design';

import { DaffioGuideNavComponent } from './guide-nav.component';


@NgModule({
  declarations: [
    DaffioGuideNavComponent,
  ],
  exports: [
    DaffioGuideNavComponent,
  ],
  imports: [
    CommonModule,
    DaffLinkSetModule,
    DaffListModule,
    RouterModule,
    DaffAccordionModule,
  ],
})
export class DaffioGuideNavModule { }
