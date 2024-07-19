import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffMenuModule } from '@daffodil/design/menu';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandMenuRoutingModule } from './menu-routing-module';
import { DesignLandMenuComponent } from './menu.component';

@NgModule({
  declarations: [
    DesignLandMenuComponent,
  ],
  imports: [
    CommonModule,
    DesignLandMenuRoutingModule,
    DaffDocsExampleViewerContainer,

    DaffArticleModule,
    DaffMenuModule,
    DaffButtonModule,
  ],
})
export class DesignLandMenuModule {

}
