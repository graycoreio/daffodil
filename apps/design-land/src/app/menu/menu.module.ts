import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffMenuModule } from '@daffodil/design';
import { DaffArticleModule } from '@daffodil/design/article';
import { DaffButtonModule } from '@daffodil/design/button';

import { DesignLandMenuRoutingModule } from './menu-routing-module';
import { DesignLandMenuComponent } from './menu.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandMenuComponent,
  ],
  imports: [
    CommonModule,
    DesignLandMenuRoutingModule,
    DesignLandExampleViewerModule,

    DaffArticleModule,
    DaffMenuModule,
    DaffButtonModule,
  ],
})
export class DesignLandMenuModule {

}
