import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffStickyTrackerDirective } from '@daffodil/design';

import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

import { DesignLandStickyComponent } from './sticky.component';
import { DesignLandStickyRoutingModule } from './sticky-routing.module';

@NgModule({
  declarations: [
    DesignLandStickyComponent,
  ],
  imports: [
    CommonModule,
    DaffStickyTrackerDirective,
    DesignLandArticleEncapsulatedModule,
    DesignLandExampleViewerModule,
    DesignLandStickyRoutingModule,
  ],
})
export class DesignLandStickyModule { } 