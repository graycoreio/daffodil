import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandButtonRoutingModule } from './button-routing.module';
import { DesignLandButtonComponent } from './button.component';

@NgModule({
  declarations: [
    DesignLandButtonComponent,
  ],
  imports: [
    CommonModule,

    DesignLandButtonRoutingModule,
    DaffDocsExampleViewerContainer,
    DaffArticleModule,
    DaffButtonModule,
  ],
})
export class DesignLandButtonModule {

}
