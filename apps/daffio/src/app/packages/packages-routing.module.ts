import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffioPackagePageComponent } from './pages/package-page/package-page.component';
import { DaffioPackagesOverviewPageComponent } from './pages/packages-overview/packages-overview.component';
import { DocsResolver } from '../docs/resolvers/docs-resolver.service';

export const docsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DaffioPackagesOverviewPageComponent,
  },
  {
    path: '**',
    component: DaffioPackagePageComponent,
    resolve: {
      doc: DocsResolver,
    },
    data: {
      sidebarMode: 'side-fixed',
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(docsRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DaffioPackagesRoutingModule { }
