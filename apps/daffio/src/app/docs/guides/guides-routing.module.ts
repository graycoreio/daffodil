import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffDocKind } from '@daffodil/docs-utils';

import { DaffioRoute } from '../../core/router/route.type';
import { DaffioRouterNamedViewsEnum } from '../../named-views/models/named-views.enum';
import { DaffioDocsListContainer } from '../containers/docs-list/docs-list.component';
import { DaffioDocsPageComponent } from '../pages/docs-page/docs-page.component';
import { DocsResolver } from '../resolvers/docs-resolver.service';

export const DAFFIO_DOCS_GUIDE_DEFAULT = 'introduction/about';

export const guidesRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    data: {
      docKind: DaffDocKind.GUIDE,
      daffNamedViews: {
        [DaffioRouterNamedViewsEnum.DOCS_SIDEBAR]: DaffioDocsListContainer,
      },
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: DAFFIO_DOCS_GUIDE_DEFAULT,
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
    RouterModule.forChild(guidesRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DaffioGuidesRoutingModule { }
