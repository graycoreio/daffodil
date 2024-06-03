import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffRouteWithNamedViews } from '@daffodil/router';

import { DaffioDocsHeaderContainer } from '../core/header/containers/docs-header/docs-header.component';
import { DaffioDocsSidebarContainer } from '../core/sidebar/containers/docs-sidebar/docs-sidebar.component';
import { DaffioRouterNamedViewsEnum } from '../named-views/models/named-views.enum';

export const docsRoutes: Routes = [
  <DaffRouteWithNamedViews>{
    path: '',
    data: {
      daffNamedViews: {
        [DaffioRouterNamedViewsEnum.NAV]: DaffioDocsHeaderContainer,
        [DaffioRouterNamedViewsEnum.SIDEBARCONTENT]: DaffioDocsSidebarContainer,
      },
    },
    children: [
      {
        path: 'packages',
        loadChildren: () => import('./packages/packages.module').then(m => m.DaffioPackagesModule),
      },
      {
        path: 'guides',
        loadChildren: () => import('./guides/guides.module').then(m => m.DaffioGuidesModule),
      },
      {
        path: 'api',
        loadChildren: () => import('./api/api.module').then(m => m.DaffioApiModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'guides/getting-started/introduction',
      },
    ],
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
export class DaffioDocsRoutingModule { }
