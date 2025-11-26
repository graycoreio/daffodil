import { Routes } from '@angular/router';

import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';
import { DaffDocKind } from '@daffodil/docs-utils';

import { provideDaffioDocsPackagesContentComponent } from './components/packages-content/packages-content.provider';
import { DaffioPackagesOverviewPageComponent } from './pages/packages-overview/packages-overview.component';
import { DaffioRoute } from '../../core/router/route.type';
import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from '../containers/docs-list/sidebar.provider';
import { daffioDocsIndexResolver } from '../index/resolver';
import { DaffioDocsPageComponent } from '../pages/docs-page/docs-page.component';
import { DocsResolver } from '../resolvers/docs-resolver.service';

export const daffioDocsPackagesRoutes = <Routes> [
  <DaffioRoute>{
    path: '',
    providers: [
      provideDaffioDocsPackagesContentComponent(),
    ],
    data: {
      docKind: DaffDocKind.PACKAGE,
    },
    resolve: {
      index: daffioDocsIndexResolver,
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
