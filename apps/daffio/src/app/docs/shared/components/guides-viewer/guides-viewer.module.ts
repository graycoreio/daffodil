import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffioGuidesViewerComponent } from './guides-viewer.component';
import { DaffListModule, DaffLinkSetModule } from '@daffodil/design'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DaffioGuidesViewerComponent
  ],
  exports: [
    DaffioGuidesViewerComponent
  ],
  imports: [
    CommonModule,
    DaffLinkSetModule,
    RouterModule
  ]
})
export class DaffioGuidesViewerModule { }
