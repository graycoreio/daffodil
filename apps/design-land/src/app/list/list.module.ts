import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandListRoutingModule } from './list-routing.module';
import { DesignLandListComponent } from './list.component';

@NgModule({
  declarations: [
    DesignLandListComponent,
  ],
  imports: [
    CommonModule,
    DesignLandListRoutingModule,
    DaffArticleModule,

    DesignLandExampleViewerModule,
  ],
})
export class DesignLandListModule {

}
