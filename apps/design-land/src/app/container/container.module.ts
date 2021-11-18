import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffArticleModule,
  DaffContainerModule,
} from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandContainerRoutingModule } from './container-routing.module';
import { DesignLandContainerComponent } from './container.component';

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
