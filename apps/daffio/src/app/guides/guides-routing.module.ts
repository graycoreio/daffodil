import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffioGuidesPageComponent } from './pages/guides-page.component';
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
    component: DaffioGuidesPageComponent,
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
export class DaffioGuidesRoutingModule { }
