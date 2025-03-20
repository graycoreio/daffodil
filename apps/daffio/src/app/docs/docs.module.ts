import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffContainerModule } from '@daffodil/design/container';
import { DaffHeroModule } from '@daffodil/design/hero';

import { DaffioDocsRoutingModule } from './docs-routing.module';
import { DaffioDocsIndexService } from './index/index.service';
import { DaffioDocsPageComponent } from './pages/docs-page/docs-page.component';
import { DaffioActiveHeaderService } from '../core/dynamic-fragment/service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioDocsRoutingModule,
    DaffContainerModule,
    DaffHeroModule,
    DaffioDocsPageComponent,
  ],
  providers: [
    DaffioDocsIndexService,
    DaffioActiveHeaderService,
  ],
})
export class DaffioDocsModule {}
