import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandSelectRoutingModule } from './select-routing.module';
import { DesignLandSelectComponent } from './select.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandSelectComponent,
  ],
  imports: [
    CommonModule,
    DesignLandSelectRoutingModule,
    DesignLandExampleViewerModule,
    DaffArticleModule,
  ],
})
export class DesignLandSelectModule {}
