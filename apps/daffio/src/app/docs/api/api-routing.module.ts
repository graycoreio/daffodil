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
import { DaffioSimpleFooterComponent } from '../../core/footer/simple-footer/simple-footer.component';
import { DaffioRoute } from '../../core/router/route.type';
import { DaffioDocsSidebarContentComponent } from '../../core/sidebar/components/docs-sidebar-content/docs-sidebar-content.component';
import { DaffioRouterNamedViewsEnum } from '../../named-views/models/named-views.enum';
import { DaffioDocsListContainer } from '../containers/docs-list/docs-list.component';
import { DocsResolver } from '../resolvers/docs-resolver.service';
import { DaffioDocsIndexService } from '../services/index.service';

export const apiRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    data: {
      daffNamedViews: {
        [DaffioRouterNamedViewsEnum.SIDEBARCONTENT]: DaffioDocsSidebarContentComponent,
        [DaffioRouterNamedViewsEnum.DOCS_SIDEBAR]: DaffioDocsListContainer,
        [DaffioRouterNamedViewsEnum.FOOTER]: DaffioSimpleFooterComponent,
      },
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
