import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignLandArticleComponent } from './article.component';
import { DesignLandArticleRoutingModule } from './article-routing.module';

import { DaffArticleModule } from '@daffodil/design';

@NgModule({
  declarations: [
    DesignLandArticleComponent
  ],
  imports: [
    CommonModule,
    DesignLandArticleRoutingModule,

    DaffArticleModule
  ]
})
export class DesignLandArticleModule { }
