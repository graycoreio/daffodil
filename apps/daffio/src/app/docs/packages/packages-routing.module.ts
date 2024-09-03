import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';
import { DaffDocKind } from '@daffodil/docs-utils';

import { DaffioPackagesOverviewPageComponent } from './pages/packages-overview/packages-overview.component';
import { DaffioRoute } from '../../core/router/route.type';
import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from '../containers/docs-list/sidebar.provider';
import { DaffioDocsPageComponent } from '../pages/docs-page/docs-page.component';
import { DocsResolver } from '../resolvers/docs-resolver.service';

export const packagesRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    data: {
      docKind: DaffDocKind.PACKAGE,
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DaffioPackagesOverviewPageComponent,
      },
      <DaffioRoute>{
        path: '**',
        component: DaffioDocsPageComponent,
        resolve: {
          doc: DocsResolver,
        },
        data: {
          daffioDockedSidebar: DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION.id,
          sidebarMode: DaffSidebarModeEnum.SideFixed,
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
