import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffContainerModule } from '@daffodil/design/container';
import { DaffHeroModule } from '@daffodil/design/hero';

import { DaffioDocArticleModule } from './components/doc-article/module';
import { DaffioDocsRoutingModule } from './docs-routing.module';
import { DaffioDocsIndexService } from './index/index.service';
import { DaffioDocsPageComponent } from './pages/docs-page/docs-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioDocArticleModule,
    DaffioDocsRoutingModule,
    DaffContainerModule,
    DaffHeroModule,
    DaffioDocsPageComponent,
  ],
  providers: [
    DaffioDocsIndexService,
  ],
})
export class DaffioDocsModule {}
