import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffContainerModule } from '@daffodil/design/container';
import { DaffHeroModule } from '@daffodil/design/hero';
import { provideDaffDocsDesignExamples } from '@daffodil/docs-components';

import { DaffioDocViewerModule } from './components/doc-viewer/doc-viewer.module';
import { DaffioDocsRoutingModule } from './docs-routing.module';
import { DaffioDocsPageComponent } from './pages/docs-page/docs-page.component';

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
    provideDaffDocsDesignExamples(),
  ],
})
export class DaffioDocsModule {}
