import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
  ],
})
export class DaffioDocViewerModule { }
