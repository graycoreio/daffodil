import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';

import { DesignLandSwitchRoutingModule } from './switch-routing.module';
import { DesignLandSwitchComponent } from './switch.component';
import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandSwitchComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DesignLandExampleViewerModule,
    DesignLandSwitchRoutingModule,
    DesignLandArticleEncapsulatedModule,
  ],
})
export class DesignLandSwitchModule { }
