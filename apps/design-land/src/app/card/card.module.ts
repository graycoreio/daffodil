import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandCardRoutingModule } from './card-routing.module';
import { DesignLandCardComponent } from './card.component';

@NgModule({
  declarations: [
    DesignLandCardComponent,
  ],
  imports: [
    CommonModule,
    DesignLandCardRoutingModule,
    DaffDocsExampleViewerContainer,
    DaffArticleModule,
  ],
})
export class DesignLandCardModule {

}
