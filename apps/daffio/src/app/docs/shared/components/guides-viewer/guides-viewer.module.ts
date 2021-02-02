import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffListModule,
  DaffLinkSetModule,
} from '@daffodil/design';

import { DaffioGuidesViewerComponent } from './guides-viewer.component';


@NgModule({
  declarations: [
    DaffioGuidesViewerComponent,
  ],
  exports: [
    DaffioGuidesViewerComponent,
  ],
  imports: [
    CommonModule,
    DaffLinkSetModule,
    RouterModule,
  ],
})
export class DaffioGuidesViewerModule { }
