import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffButtonSetModule,
  DaffButtonModule,
  DaffArticleModule,
} from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,

    DesignLandButtonRoutingModule,
    DesignLandExampleViewerModule,
    DaffButtonSetModule,
    DaffButtonModule,
    DaffArticleModule,
  ],
})
export class ButtonModule {

}
