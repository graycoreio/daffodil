import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandLoadingIconRoutingModule } from './loading-icon-routing.module';
import { DesignLandLoadingIconComponent } from './loading-icon.component';

@NgModule({
  declarations: [
    DesignLandLoadingIconComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DaffDocsExampleViewerContainer,
    DesignLandLoadingIconRoutingModule,
  ],
})
export class DesignLandLoadingIconModule {

}
