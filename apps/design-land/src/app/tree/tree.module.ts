import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffTreeModule } from '@daffodil/design/tree';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandTreeRoutingModule } from './tree-routing-module';
import { DesignLandTreeComponent } from './tree.component';
import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';

@NgModule({
  declarations: [
    DesignLandTreeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DesignLandTreeRoutingModule,
    DaffDocsExampleViewerContainer,
    DesignLandArticleEncapsulatedModule,

    DaffArticleModule,
    DaffTreeModule,
  ],
})
export class DesignLandTreeModule {}
