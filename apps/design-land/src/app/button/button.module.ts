import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffButtonModule } from '@daffodil/design';
import { DaffArticleModule } from '@daffodil/design/article';

import { DesignLandButtonRoutingModule } from './button-routing.module';
import { DesignLandButtonComponent } from './button.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandButtonComponent,
  ],
  imports: [
    CommonModule,

    DesignLandButtonRoutingModule,
    DesignLandExampleViewerModule,
    DaffArticleModule,
    DaffButtonModule,
  ],
})
export class DesignLandButtonModule {

}
