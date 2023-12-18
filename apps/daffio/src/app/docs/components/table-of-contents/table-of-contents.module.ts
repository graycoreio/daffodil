import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffListModule,
  DaffLinkSetModule,
} from '@daffodil/design';
import { DaffAccordionModule } from '@daffodil/design/accordion';

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
