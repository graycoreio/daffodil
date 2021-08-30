import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffArticleModule,
  DaffDecorativeIconModule,
} from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandDecorativeIconRoutingModule } from './decorative-icon-routing.module';
import { DesignLandDecorativeIconComponent } from './decorative-icon.component';

@NgModule({
  declarations: [
    DesignLandDecorativeIconComponent,
  ],
  imports: [
    CommonModule,
    DesignLandDecorativeIconRoutingModule,
    DesignLandExampleViewerModule,
    DaffArticleModule,
    DaffDecorativeIconModule,

    FontAwesomeModule,
  ],
})
export class DesignLandDecorativeIconModule {

}
