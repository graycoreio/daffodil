import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandCalloutRoutingModule } from './callout-routing.module';
import { DesignLandCalloutComponent } from './callout.component';

@NgModule({
  declarations: [
    DesignLandCalloutComponent,
  ],
  imports: [
    CommonModule,
    DesignLandCalloutRoutingModule,

    DaffArticleModule,
    DesignLandExampleViewerModule,
  ],
})
export class DesignLandCalloutModule {
}
