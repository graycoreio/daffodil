import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandVariablesRoutingModule } from './variables-routing.module';
import { DesignLandVariablesComponent } from './variables.component';
import { DesignLandExampleViewerModule } from '../../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandVariablesComponent,
  ],
  imports: [
    CommonModule,
    DesignLandExampleViewerModule,
    DesignLandVariablesRoutingModule,
    DaffArticleModule,
  ],
})
export class DesignLandVariablesModule {}
