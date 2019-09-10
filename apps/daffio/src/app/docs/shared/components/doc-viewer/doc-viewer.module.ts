import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffioDocViewerComponent } from './doc-viewer.component';

@NgModule({
  declarations: [
    DaffioDocViewerComponent
  ],
  exports: [
    DaffioDocViewerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DaffioDocViewerModule { }
