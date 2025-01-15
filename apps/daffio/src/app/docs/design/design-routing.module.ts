import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';
import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION } from './containers/docs-list/sidebar.provider';
import { DaffioDocsDesignComponentOverviewPageComponent } from './pages/components-overview/component-overview.component';
import { DaffioDocsDesignOverviewPageComponent } from './pages/overview/overview.component';
import { DaffioRoute } from '../../core/router/route.type';
import { DaffioDocsPageComponent } from '../pages/docs-page/docs-page.component';
import { DocsResolver } from '../resolvers/docs-resolver.service';
import { daffioDocsDesignIndexResolver } from './services/index.resolver';

export const docsDesignRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    resolve: {
      index: daffioDocsDesignIndexResolver,
    },
    data: {
      docPrefix: `${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`,
      daffioSidebars: {
        [DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION.id]: DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION,
      },
      daffioDockedSidebar: DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION.id,
    },
    children: [
      {
        path: DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.API],
        loadChildren: () => import('../api/api.module').then(m => m.DaffioApiModule),
      },
      {
        path: '',
        pathMatch: 'full',
        component: DaffioDocsDesignOverviewPageComponent,
      },
      {
        path: DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.COMPONENT],
        component: DaffioDocsDesignComponentOverviewPageComponent,
      },
      <DaffioRoute>{
        path: '**',
        component: DaffioDocsPageComponent,
        resolve: {
          doc: DocsResolver,
        },
        data: {
          sidebarMode: DaffSidebarModeEnum.SideFixed,
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(docsDesignRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DaffioDocsDesignRoutingModule { }
