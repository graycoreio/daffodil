import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { daffDocsResolve } from '@daffodil/documentation/routing';
import { DaffRouteWithNamedViews } from '@daffodil/router';

import { DaffioDocsGuidesListContainer } from './containers/guides-list/guides-list.component';
import { DaffioRouterNamedViewsEnum } from '../../named-views/models/named-views.enum';
import { DaffioDocsPageComponent } from '../pages/docs-page/docs-page.component';

export const DAFFIO_DOCS_GUIDE_DEFAULT = 'introduction/about';

export const docsRoutes: Routes = [
  <DaffRouteWithNamedViews>{
    path: '',
    data: {
      daffNamedViews: {
        [DaffioRouterNamedViewsEnum.DOCS_SIDEBAR]: DaffioDocsGuidesListContainer,
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
          doc: daffDocsResolve,
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
export class DaffioGuidesRoutingModule { }
