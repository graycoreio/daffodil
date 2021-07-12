import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffListModule,
  DaffLinkSetModule,
  DaffAccordionModule,
} from '@daffodil/design';

import { DaffioDocsTableOfContentsComponent } from './table-of-contents.component';


@NgModule({
  declarations: [
    DaffioDocsTableOfContentsComponent,
  ],
  exports: [
    DaffioDocsTableOfContentsComponent,
  ],
  imports: [
    CommonModule,
    DaffLinkSetModule,
    DaffListModule,
    RouterModule,
    DaffAccordionModule,
  ],
})
export class DaffioDocsTableOfContentsModule { }
