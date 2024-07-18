import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';

import { DesignLandLoadingIconRoutingModule } from './loading-icon-routing.module';
import { DesignLandLoadingIconComponent } from './loading-icon.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandLoadingIconComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DesignLandExampleViewerModule,
    DesignLandLoadingIconRoutingModule,
  ],
})
export class DesignLandLoadingIconModule {

}
