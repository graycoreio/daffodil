import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffPaginatorModule } from '@daffodil/design/paginator';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandPaginatorRoutingModule } from './paginator-routing.module';
import { DesignLandPaginatorComponent } from './paginator.component';
import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';

@NgModule({
  declarations: [
    DesignLandPaginatorComponent,
  ],
  imports: [
    CommonModule,

    DaffPaginatorModule,
    DaffArticleModule,

    DesignLandPaginatorRoutingModule,
    DesignLandArticleEncapsulatedModule,
    DaffDocsExampleViewerContainer,
  ],
})
export class DesignLandPaginatorModule { }
