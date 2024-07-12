import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandSidebarRoutingModule } from './sidebar-routing.module';
import { DesignLandSidebarComponent } from './sidebar.component';
import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';

@NgModule({
  declarations: [
    DesignLandSidebarComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DaffDocsExampleViewerContainer,
    DesignLandSidebarRoutingModule,
    DesignLandArticleEncapsulatedModule,
  ],
})
export class DesignLandSidebarModule { }
