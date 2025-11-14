import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { provideDaffioDocsPackagesContentComponent } from './components/packages-content/packages-content.provider';
import { DaffioPackagesRoutingModule } from './packages-routing.module';
import { DaffioPackagesOverviewPageComponent } from './pages/packages-overview/packages-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioPackagesRoutingModule,
    DaffioPackagesOverviewPageComponent,
  ],
  providers: [
    provideDaffioDocsPackagesContentComponent(),
  ],
})
export class DaffioPackagesModule {}
