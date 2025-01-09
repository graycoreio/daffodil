import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffContainerModule } from '@daffodil/design/container';
import { DaffHeroModule } from '@daffodil/design/hero';

import { daffioDocsPackageComponentProvider } from './components/doc/provider';
import { DaffioDocsPackageCardsContainerModule } from './containers/package-cards/package-cards.module';
import { DaffioPackagesRoutingModule } from './packages-routing.module';
import { DaffioPackagesOverviewPageComponent } from './pages/packages-overview/packages-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioPackagesRoutingModule,
    DaffContainerModule,
    DaffHeroModule,
    DaffioDocsPackageCardsContainerModule,
  ],
  declarations: [
    DaffioPackagesOverviewPageComponent,
  ],
  exports: [
    DaffioPackagesOverviewPageComponent,
  ],
  providers: [
    daffioDocsPackageComponentProvider(),
  ],
})
export class DaffioPackagesModule {}
