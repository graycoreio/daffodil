import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffContainerModule } from '@daffodil/design/container';
import { DaffHeroModule } from '@daffodil/design/hero';

import { DaffioDocViewerModule } from './components/doc-viewer/doc-viewer.module';
import { DaffioDocsRoutingModule } from './docs-routing.module';
import { DaffioDocsPageComponent } from './pages/docs-page/docs-page.component';
import { DaffioDocsIndexService } from './services/index.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioDocViewerModule,
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
