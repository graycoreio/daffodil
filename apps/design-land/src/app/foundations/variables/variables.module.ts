import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandVariablesRoutingModule } from './variables-routing.module';
import { DesignLandVariablesComponent } from './variables.component';

@NgModule({
  declarations: [
    DesignLandVariablesComponent,
  ],
  imports: [
    CommonModule,
    DaffDocsExampleViewerContainer,
    DesignLandVariablesRoutingModule,
    DaffArticleModule,
  ],
})
export class DesignLandVariablesModule {}
