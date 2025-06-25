import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffAccordionModule } from '@daffodil/design/accordion';
import { DaffLinkSetModule } from '@daffodil/design/link-set';
import { DaffListModule } from '@daffodil/design/list';

import { DaffioDocsTableOfContentsLinkComponent } from './link/link.component';
import { DaffioDocsTableOfContentsComponent } from './table-of-contents.component';
import { DaffioDocsScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';

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
    DaffioDocsTableOfContentsLinkComponent,
    DaffioDocsScrollToTopComponent,
  ],
})
export class DaffioDocsTableOfContentsModule { }
