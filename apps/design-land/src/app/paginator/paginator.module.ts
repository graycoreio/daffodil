import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffPaginatorModule,
  DaffArticleModule,
} from '@daffodil/design';

import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandPaginatorRoutingModule } from './paginator-routing.module';
import { DesignLandPaginatorComponent } from './paginator.component';

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
    DesignLandExampleViewerModule,
  ],
})
export class DesignLandPaginatorModule { }
