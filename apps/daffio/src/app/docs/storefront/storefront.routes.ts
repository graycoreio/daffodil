import { Routes } from '@angular/router';

import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';
import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_STOREFRONT_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { provideDaffioStorefrontExamplesContent } from './examples/content.provider';
import { DaffioDocsStorefrontOverviewPageComponent } from './pages/overview/overview.component';
import { DaffioRoute } from '../../core/router/route.type';
import { daffioDocsApiRolesProvider } from '../api/roles/api-roles.provider';
import { provideDaffioDocsDesignComponentContentComponent } from '../design/components/component-content/component-content.provider';
import { DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION } from '../design/containers/docs-list/sidebar.provider';
import { DaffioDocsDesignComponentOverviewPageComponent } from '../design/pages/components-overview/component-overview.component';
import { daffioDocsDesignComponentDocResolver } from '../design/resolvers/component-doc.resolver';
import { daffioDocsDesignComponentListResolverFactory } from '../design/resolvers/component-list.resolver';
import { daffioDocsDesignIndexResolver } from '../design/resolvers/index.resolver';
import { provideDaffioDocsDesignIndexService } from '../design/services/index.service';
import { DaffioDocsPageComponent } from '../pages/docs-page/docs-page.component';
import { DocsResolver } from '../resolvers/docs-resolver.service';
import { provideDaffioDocsExampleService } from '../services/example.provider';

export const daffioDocsStorefrontRoutes = <Routes>[
  <DaffioRoute>{
    path: '',
    providers: [
      provideDaffioDocsDesignIndexService(DAFF_DOCS_STOREFRONT_PATH),
      provideDaffioDocsDesignComponentContentComponent(),
      ...daffioDocsApiRolesProvider(),
      provideDaffioDocsExampleService(),
      provideDaffioStorefrontExamplesContent(),
    ],
    resolve: {
      index: daffioDocsDesignIndexResolver,
    },
    data: {
      daffioSidebars: {
        [DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION.id]: DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION,
      },
      daffioDockedSidebar: DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION.id,
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DaffioDocsStorefrontOverviewPageComponent,
      },
      {
        path: DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.COMPONENT],
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: DaffioDocsDesignComponentOverviewPageComponent,
            resolve: {
              components: daffioDocsDesignComponentListResolverFactory(DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.COMPONENT]),
            },
            data: {
              title: 'Components',
              subtitle: 'Components are reusable UI elements in a design system that helps to create consistent, intuitive experiences across products.',
            },
          },
          <DaffioRoute>{
            path: '**',
            component: DaffioDocsPageComponent,
            resolve: {
              doc: daffioDocsDesignComponentDocResolver,
            },
            data: {
              sidebarMode: DaffSidebarModeEnum.SideFixed,
            },
          },
        ],
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
