import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffRouteWithNamedViews } from '@daffodil/router';

import { DaffioDocsPackagesListContainer } from './containers/packages-list/packages-list.component';
import { DaffioPackagesOverviewPageComponent } from './pages/packages-overview/packages-overview.component';
import { DaffioRouterNamedViewsEnum } from '../../named-views/models/named-views.enum';
import { DaffioDocsPageComponent } from '../pages/docs-page/docs-page.component';
import { DocsResolver } from '../resolvers/docs-resolver.service';

export const docsRoutes: Routes = [
  <DaffRouteWithNamedViews>{
    path: '',
    data: {
      daffNamedViews: {
        [DaffioRouterNamedViewsEnum.DOCS_SIDEBAR]: DaffioDocsPackagesListContainer,
      },
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DaffioPackagesOverviewPageComponent,
      },
      {
        path: '**',
        component: DaffioDocsPageComponent,
        resolve: {
          doc: DocsResolver,
        },
        data: {
          sidebarMode: 'side-fixed',
        },
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
export class DaffioPackagesRoutingModule { }
