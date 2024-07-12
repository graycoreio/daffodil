import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffProgressBarModule } from '@daffodil/design/progress-bar';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandProgressBarRoutingModule } from './progress-bar-routing.module';
import { DesignLandProgressBarComponent } from './progress-bar.component';

@NgModule({
  declarations: [
    DesignLandProgressBarComponent,
  ],
  imports: [
    CommonModule,
    DesignLandProgressBarRoutingModule,
    DaffDocsExampleViewerContainer,

    DaffProgressBarModule,
    DaffArticleModule,
  ],
})
export class DesignLandProgressBarModule { }
