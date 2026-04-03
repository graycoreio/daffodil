import { Routes } from '@angular/router';

import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';
import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { provideDaffioDocsDesignComponentContentComponent } from './components/component-content/component-content.provider';
import { DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION } from './containers/docs-list/sidebar.provider';
import { provideDaffioDesignExamplesContent } from './examples/content.provider';
import { DaffioDocsDesignComponentOverviewPageComponent } from './pages/components-overview/component-overview.component';
import { daffioDocsDesignComponentDocResolver } from './resolvers/component-doc.resolver';
import { daffioDocsDesignComponentListResolverFactory } from './resolvers/component-list.resolver';
import { DaffioRoute } from '../../core/router/route.type';
import { DaffioDocsPageComponent } from '../pages/docs-page/docs-page.component';
import { DocsResolver } from '../resolvers/docs-resolver.service';
import { daffioDocsDesignIndexResolver } from './resolvers/index.resolver';
import { provideDaffioDocsDesignIndexService } from './services/index.service';
import { daffioDocsApiRolesProvider } from '../api/roles/api-roles.provider';
import { provideDaffioDocsExampleService } from '../services/example.provider';
import { provideDaffioStorefrontExamplesContent } from '../storefront/examples/content.provider';

export const daffioDocsDesignRoutesFactory = (section: string, ...extraRoutes: Routes) => <Routes> [
  <DaffioRoute>{
    path: '',
    providers: [
      provideDaffioDocsDesignIndexService(section),
      provideDaffioDocsDesignComponentContentComponent(),
      ...daffioDocsApiRolesProvider(),
      provideDaffioDesignExamplesContent(),
      provideDaffioStorefrontExamplesContent(),
      provideDaffioDocsExampleService(),
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
      ...extraRoutes,
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
      {
        path: 'behaviors',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: DaffioDocsDesignComponentOverviewPageComponent,
            resolve: {
              components: daffioDocsDesignComponentListResolverFactory('behaviors'),
            },
            data: {
              title: 'Behaviors',
              subtitle: 'Behaviors are reusable, composable traits for building UI components that enforce consistent inputs, types, and patterns across both Daffodil and custom components.',
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
