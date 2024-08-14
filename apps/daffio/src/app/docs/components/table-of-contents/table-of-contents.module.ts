import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffButtonModule } from '@daffodil/design/button';

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
    RouterModule,
    DaffButtonModule,
  ],
})
export class DaffioDocsTableOfContentsModule { }
