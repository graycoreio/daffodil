import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffDocKind } from '@daffodil/docs-utils';

import { DaffioApiListPageComponent } from './pages/api-list-page/api-list-page.component';
import { DaffioApiPageComponent } from './pages/api-page/api-page.component';
import { DaffioRoute } from '../../core/router/route.type';
import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from '../containers/docs-list/sidebar.provider';
import { daffioDocsIndexResolver } from '../index/resolver';
import { DocsResolver } from '../resolvers/docs-resolver.service';
import { DAFFIO_API_NAV_LIST_SIDEBAR_REGISTRATION } from './sidebar/provider';

export const apiRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    data: {
      docKind: DaffDocKind.API,
      daffioSidebars: {
        [DAFFIO_API_NAV_LIST_SIDEBAR_REGISTRATION.id]: DAFFIO_API_NAV_LIST_SIDEBAR_REGISTRATION,
      },
    },
    resolve: {
      index: daffioDocsIndexResolver,
    },
    children: [
      {
        path: '',
        component: DaffioApiListPageComponent,
      },
      {
        path: '**',
        component: DaffioApiPageComponent,
        resolve: {
          doc: DocsResolver,
        },
        data: {
          daffioDockedSidebar: DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION.id,
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(apiRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DaffioDocsApiRoutingModule {}
