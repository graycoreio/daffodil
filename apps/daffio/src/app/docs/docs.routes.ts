import { Routes } from '@angular/router';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DAFF_DOCS_STOREFRONT_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from './containers/docs-list/sidebar.provider';
import { DaffioDocsIndexService } from './index/index.service';
import { DaffioDocsFooterComponent } from '../core/footer/docs-footer/docs-footer.component';
import { DaffioDocsNavContainer } from '../core/nav/docs/docs.component';
import { DAFF_DOCS_NAV_SIDEBAR_REGISTRATION } from '../core/nav/docs-sidebar.provider';
import { DaffioDocsDesignNavLinkComponent } from './design/components/nav-link/nav-link.component';
import { DaffioDocsDesignOverviewPageComponent } from './design/pages/overview/overview.component';
import { DaffioRouterNamedViewsEnum } from '../core/router/named-views/models/named-views.enum';
import { DaffioRoute } from '../core/router/route.type';
import { DAFFIO_DOCS_TOC_SIDEBAR_REGISTRATION } from './containers/toc-sidebar-content/sidebar.provider';
import { DaffioActiveHeaderService } from '../core/dynamic-fragment/service';
import { provideDaffioDocsDesignSection } from './design/services/index.service';
import { DaffioDocsStorefrontOverviewPageComponent } from './storefront/pages/overview/overview.component';

export const daffioDocsRoutes = <Routes> [
  <DaffioRoute>{
    path: '',
    providers: [
      DaffioDocsIndexService,
      DaffioActiveHeaderService,
    ],
    data: {
      daffNamedViews: {
        [DaffioRouterNamedViewsEnum.NAV]: DaffioDocsNavContainer,
        [DaffioRouterNamedViewsEnum.FOOTER]: DaffioDocsFooterComponent,
      },
      daffioNavLinks: [
        { url: `/${DAFF_DOCS_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.GUIDE]}`, title: 'Guides' },
        { url: `/${DAFF_DOCS_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.PACKAGE]}`, title: 'Packages' },
        DaffioDocsDesignNavLinkComponent,
        { url: `/${DAFF_DOCS_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.API]}`, title: 'API Reference' },
      ],
      daffioSidebars: {
        [DAFF_DOCS_NAV_SIDEBAR_REGISTRATION.id]: DAFF_DOCS_NAV_SIDEBAR_REGISTRATION,
        [DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION.id]: DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION,
        [DAFFIO_DOCS_TOC_SIDEBAR_REGISTRATION.id]: DAFFIO_DOCS_TOC_SIDEBAR_REGISTRATION,
      },
    },
    children: [
      {
        path: DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.PACKAGE],
        loadChildren: () => import('./packages/packages.routes').then(r => r.daffioDocsPackagesRoutes),
      },
      {
        path: DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.GUIDE],
        loadChildren: () => import('./guides/guides.routes').then(r => r.daffioDocsGuidesRoutes),
      },
      {
        path: DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.API],
        loadChildren: () => import('./api/api.routes').then(r => r.daffioDocsApiRoutes),
      },
      {
        path: DAFF_DOCS_DESIGN_PATH,
        loadChildren: () => import('./design/design.routes').then(r => r.daffioDocsDesignRoutesFactory(
          DAFF_DOCS_DESIGN_PATH,
          {
            path: '',
            pathMatch: 'full',
            component: DaffioDocsDesignOverviewPageComponent,
          },
        )),
      },
      {
        path: DAFF_DOCS_STOREFRONT_PATH,
        providers: [
          provideDaffioDocsDesignSection(DAFF_DOCS_STOREFRONT_PATH),
        ],
        loadChildren: () => import('./design/design.routes').then(r => r.daffioDocsDesignRoutesFactory(
          DAFF_DOCS_STOREFRONT_PATH,
          {
            path: '',
            pathMatch: 'full',
            component: DaffioDocsStorefrontOverviewPageComponent,
          },
        )),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.GUIDE],
      },
    ],
  },
];
