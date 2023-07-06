import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffArticleModule,
  DaffButtonModule,
} from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandButtonRoutingModule } from './button-routing.module';
import { DesignLandButtonComponent } from './button.component';

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
