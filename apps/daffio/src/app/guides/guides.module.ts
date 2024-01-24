import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffContainerModule } from '@daffodil/design/container';
import { DaffHeroModule } from '@daffodil/design/hero';

import { DaffioDocsPackageCardsContainerModule } from './containers/package-cards/package-cards.module';
import { DaffioGuidesRoutingModule } from './guides-routing.module';
import { DaffioGuidesPageComponent } from './pages/guides-page.component';
import { DaffioPackagesOverviewPageComponent } from './pages/packages-overview/packages-overview.component';
import { DaffioDocViewerModule } from '../docs/components/doc-viewer/doc-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioDocViewerModule,
    DaffioGuidesRoutingModule,
    DaffContainerModule,
    DaffHeroModule,
    DaffioDocsPackageCardsContainerModule,
  ],
  declarations: [
    DaffioGuidesPageComponent,
    DaffioPackagesOverviewPageComponent,
  ],
  exports: [
    DaffioGuidesPageComponent,
    DaffioPackagesOverviewPageComponent,
  ],
})
export class DaffioGuidesModule {}
