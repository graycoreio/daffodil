import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffDocKind } from '@daffodil/docs-utils';

import { DaffioPackagesOverviewPageComponent } from './pages/packages-overview/packages-overview.component';
import { DaffioRoute } from '../../core/router/route.type';
import { DaffioRouterNamedViewsEnum } from '../../named-views/models/named-views.enum';
import { DaffioDocsListContainer } from '../containers/docs-list/docs-list.component';
import { DaffioDocsPageComponent } from '../pages/docs-page/docs-page.component';
import { DocsResolver } from '../resolvers/docs-resolver.service';

export const packagesRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    data: {
      docKind: DaffDocKind.PACKAGE,
      daffNamedViews: {
        [DaffioRouterNamedViewsEnum.DOCS_SIDEBAR]: DaffioDocsListContainer,
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
    RouterModule.forChild(packagesRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DaffioPackagesRoutingModule { }
