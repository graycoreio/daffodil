import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from './containers/docs-list/sidebar.provider';
import { DaffioSimpleFooterComponent } from '../core/footer/simple-footer/simple-footer.component';
import { DaffioDocsNavContainer } from '../core/nav/docs/docs.component';
import { DaffioRouterNamedViewsEnum } from '../core/router/named-views/models/named-views.enum';
import { DaffioRoute } from '../core/router/route.type';

export const docsRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    data: {
      daffNamedViews: {
        [DaffioRouterNamedViewsEnum.NAV]: DaffioDocsNavContainer,
        [DaffioRouterNamedViewsEnum.FOOTER]: DaffioSimpleFooterComponent,
      },
      daffioNavLinks: [
        { url: `/${DAFF_DOCS_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.GUIDE]}`, title: 'Guides' },
        { url: `/${DAFF_DOCS_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.PACKAGE]}`, title: 'Packages' },
        { url: `/${DAFF_DOCS_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.API]}`, title: 'API Reference' },
        { url: `/${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`, title: 'Design' },
      ],
      daffioSidebars: {
        [DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION.id]: DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION,
      },
    },
    children: [
      {
        path: DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.PACKAGE],
        loadChildren: () => import('./packages/packages.module').then(m => m.DaffioPackagesModule),
      },
      {
        path: DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.GUIDE],
        loadChildren: () => import('./guides/guides.module').then(m => m.DaffioGuidesModule),
      },
      {
        path: DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.API],
        loadChildren: () => import('./api/api.module').then(m => m.DaffioApiModule),
      },
      {
        path: DAFF_DOCS_DESIGN_PATH,
        loadChildren: () => import('./design/design.module').then(m => m.DaffioDocsDesignModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.GUIDE],
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
export class DaffioDocsRoutingModule { }
