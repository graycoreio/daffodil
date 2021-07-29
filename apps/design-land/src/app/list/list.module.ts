import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignLandListRoutingModule } from './list-routing.module';

import { DesignLandListComponent } from './list.component';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

import {
  DaffArticleModule,
  DaffListModule,
} from '@daffodil/design';

@NgModule({
  declarations: [
    DesignLandListComponent,
  ],
  imports: [
    CommonModule,
    DesignLandListRoutingModule,
    DaffArticleModule,
    DaffListModule,

    DesignLandExampleViewerModule,
  ],
})
export class DesignLandListModule {

}
