import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';

import { DesignLandListRoutingModule } from './list-routing.module';
import { DesignLandListComponent } from './list.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

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
