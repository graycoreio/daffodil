import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffContainerModule } from '@daffodil/design/container';
import { DaffHeroModule } from '@daffodil/design/hero';

import { DaffioDocsPackageCardsContainerModule } from './containers/package-cards/package-cards.module';
import { DaffioPackagesRoutingModule } from './packages-routing.module';
import { DaffioPackagesOverviewPageComponent } from './pages/packages-overview/packages-overview.component';
import { DaffioDocViewerModule } from '../docs/components/doc-viewer/doc-viewer.module';
import { DaffioPackagePageComponent } from './pages/package-page/package-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioDocViewerModule,
    DaffioPackagesRoutingModule,
    DaffContainerModule,
    DaffHeroModule,
    DaffioDocsPackageCardsContainerModule,
  ],
  declarations: [
    DaffioPackagePageComponent,
    DaffioPackagesOverviewPageComponent,
  ],
  exports: [
    DaffioPackagePageComponent,
    DaffioPackagesOverviewPageComponent,
  ],
})
export class DaffioPackagesModule {}
