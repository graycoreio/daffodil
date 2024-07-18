import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffProgressBarModule } from '@daffodil/design/progress-bar';

import { DesignLandProgressBarRoutingModule } from './progress-bar-routing.module';
import { DesignLandProgressBarComponent } from './progress-bar.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandProgressBarComponent,
  ],
  imports: [
    CommonModule,
    DesignLandProgressBarRoutingModule,
    DesignLandExampleViewerModule,

    DaffProgressBarModule,
    DaffArticleModule,
  ],
})
export class DesignLandProgressBarModule { }
