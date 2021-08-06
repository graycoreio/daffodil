import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffioDocViewerModule } from '../docs/components/doc-viewer/doc-viewer.module';
import { DaffioGuidesRoutingModule } from './guides-routing.module';
import { DaffioGuidesPageComponent } from './pages/guides-page.component';

@NgModule({
  imports: [
    CommonModule,
    DaffioDocViewerModule,
    DaffioGuidesRoutingModule,
  ],
  declarations: [
    DaffioGuidesPageComponent,
  ],
  exports: [
    DaffioGuidesPageComponent,
  ],
})
export class DaffioGuidesModule {}
