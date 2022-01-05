import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffArticleModule,
  DaffPaginatorModule,
} from '@daffodil/design';

import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';
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
  ],
})
export class DesignLandPaginatorModule { }
