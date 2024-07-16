import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

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

    DaffDocsExampleViewerContainer,
  ],
})
export class DesignLandListModule {

}
