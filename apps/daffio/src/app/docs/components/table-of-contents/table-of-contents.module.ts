import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffAccordionModule } from '@daffodil/design/accordion';
import { DaffLinkSetModule } from '@daffodil/design/link-set';
import { DaffListModule } from '@daffodil/design/list';

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
