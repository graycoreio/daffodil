import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffListModule,
  DaffLinkSetModule,
  DaffAccordionModule,
} from '@daffodil/design';

import { DaffioGuideTableOfContentsComponent } from './table-of-contents.component';


@NgModule({
  declarations: [
    DaffioGuideTableOfContentsComponent,
  ],
  exports: [
    DaffioGuideTableOfContentsComponent,
  ],
  imports: [
    CommonModule,
    DaffLinkSetModule,
    DaffListModule,
    RouterModule,
    DaffAccordionModule,
  ],
})
export class DaffioGuideTableOfContentsModule { }
