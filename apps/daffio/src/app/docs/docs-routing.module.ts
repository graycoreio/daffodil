import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from './containers/docs-list/sidebar.provider';
import { DAFFIO_DOCS_GUIDE_DEFAULT } from './guides/guides-routing.module';
import { DAFF_NAV_SIDEBAR_REGISTRATION } from '../core/nav/sidebar.provider';
import { DaffioRoute } from '../core/router/route.type';

export const docsRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    data: {
      daffioNavLinks: [
        { url: '/docs/guides', title: 'Guides' },
        { url: '/docs/packages', title: 'Packages' },
        { url: '/docs/api', title: 'API Index' },
      ],
      daffioSidebars: {
        [DAFF_NAV_SIDEBAR_REGISTRATION.id]: DAFF_NAV_SIDEBAR_REGISTRATION,
        [DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION.id]: DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION,
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
        redirectTo: `guides/${DAFFIO_DOCS_GUIDE_DEFAULT}`,
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
