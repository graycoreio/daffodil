import { Routes } from '@angular/router';

import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';
import { DaffDocKind } from '@daffodil/docs-utils';

import { provideDaffioDocsGuidesContentComponent } from './components/guides-content/guides-content.provider';
import { DaffioRoute } from '../../core/router/route.type';
import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from '../containers/docs-list/sidebar.provider';
import { daffioDocsIndexResolver } from '../index/resolver';
import { DaffioDocsPageComponent } from '../pages/docs-page/docs-page.component';
import { DocsResolver } from '../resolvers/docs-resolver.service';

export const DAFFIO_DOCS_GUIDE_DEFAULT = 'introduction';

export const daffioDocsGuidesRoutes = <Routes> [
  <DaffioRoute>{
    path: '',
    providers: [
      provideDaffioDocsGuidesContentComponent(),
    ],
    data: {
      docKind: DaffDocKind.GUIDE,
    },
    resolve: {
      index: daffioDocsIndexResolver,
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
