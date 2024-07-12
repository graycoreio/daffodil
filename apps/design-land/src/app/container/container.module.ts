import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandContainerRoutingModule } from './container-routing.module';
import { DesignLandContainerComponent } from './container.component';

@NgModule({
  declarations: [
    DesignLandContainerComponent,
  ],
  imports: [
    CommonModule,
    DesignLandContainerRoutingModule,
    DaffDocsExampleViewerContainer,
    DaffContainerModule,
    DaffArticleModule,
  ],
})
export class DesignLandContainerModule { }
