import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DaffioDocViewerComponent } from './doc-viewer.component';

@NgModule({
  declarations: [
    DaffioDocViewerComponent,
  ],
  exports: [
    DaffioDocViewerComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
  ],
})
export class DaffioDocViewerModule { }
