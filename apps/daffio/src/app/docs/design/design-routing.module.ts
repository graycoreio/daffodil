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
import { DaffioDocsDesignLandingPageComponent } from './pages/landing/landing.component';
import { DAFF_NAV_SIDEBAR_REGISTRATION } from '../../core/nav/sidebar.provider';
import { DaffioRoute } from '../../core/router/route.type';
import { DaffioDocsPageComponent } from '../pages/docs-page/docs-page.component';
import { DocsResolver } from '../resolvers/docs-resolver.service';

export const docsDesignRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    data: {
      docPrefix: `${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`,
      daffioSidebars: {
        [DAFF_NAV_SIDEBAR_REGISTRATION.id]: DAFF_NAV_SIDEBAR_REGISTRATION,
        [DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION.id]: DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION,
      },
      daffioDockedSidebar: DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION.id,
      // daffNamedViews: {
      //   [DaffioRouterNamedViewsEnum.FOOTER]: DaffioSimpleFooterComponent,
      // },
    },
    children: [
      {
        path: DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.API],
        loadChildren: () => import('../api/api.module').then(m => m.DaffioApiModule),
      },
      {
        path: '',
        pathMatch: 'full',
        component: DaffioDocsDesignLandingPageComponent,
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
