import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffContainerModule } from '@daffodil/design/container';

import { DesignLandContainerRoutingModule } from './container-routing.module';
import { DesignLandContainerComponent } from './container.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandContainerComponent,
  ],
  imports: [
    CommonModule,
    DesignLandContainerRoutingModule,
    DesignLandExampleViewerModule,
    DaffContainerModule,
    DaffArticleModule,
  ],
})
export class DesignLandContainerModule { }
