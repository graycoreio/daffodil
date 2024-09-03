import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';
import { DaffDocKind } from '@daffodil/docs-utils';

import { DaffioRoute } from '../../core/router/route.type';
import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from '../containers/docs-list/sidebar.provider';
import { DaffioDocsPageComponent } from '../pages/docs-page/docs-page.component';
import { DocsResolver } from '../resolvers/docs-resolver.service';

export const DAFFIO_DOCS_GUIDE_DEFAULT = 'introduction/about';

export const guidesRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    data: {
      docKind: DaffDocKind.GUIDE,
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: DAFFIO_DOCS_GUIDE_DEFAULT,
      },
      <DaffioRoute>{
        path: '**',
        component: DaffioDocsPageComponent,
        resolve: {
          doc: DocsResolver,
        },
        data: {
          sidebarMode: DaffSidebarModeEnum.SideFixed,
          daffioDockedSidebar: DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION.id,
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
