import {
  inject,
  NgModule,
} from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffDocKind } from '@daffodil/docs-utils';

import { DaffioApiListPageComponent } from './pages/api-list-page/api-list-page.component';
import { DaffioApiPageComponent } from './pages/api-page/api-page.component';
import { DaffioRoute } from '../../core/router/route.type';
import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from '../containers/docs-list/sidebar.provider';
import { DocsResolver } from '../resolvers/docs-resolver.service';
import { DaffioDocsIndexService } from '../services/index.service';

export const apiRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    data: {
      docKind: DaffDocKind.API,
    },
    children: [
      {
        path: '',
        component: DaffioApiListPageComponent,
        resolve: {
          reference: () => inject(DaffioDocsIndexService).getList(DaffDocKind.API),
        },
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
