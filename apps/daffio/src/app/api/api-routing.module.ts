import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffioApiListPageComponent } from './pages/api-list-page/api-list-page.component';
import { DaffioApiPageComponent } from './pages/api-page/api-page.component';
import { DaffioApiListResolver } from './resolvers/api-list-resolver.service';
import { DaffRouteWithNamedViews } from '../core/router/named-view/models/route.type';
import { DaffioDocsSidebarContainer } from '../docs/containers/sidebar/sidebar.component';
import { DocsResolver } from '../docs/resolvers/docs-resolver.service';
import { DaffioRouterNamedViewsEnum } from '../named-views/models/named-views.enum';

export const apiRoutes: Routes = [
  <DaffRouteWithNamedViews>{
    path: '',
    component: DaffioApiListPageComponent,
    resolve: {
      reference: DaffioApiListResolver,
    },
    data: {
      sidebarMode: 'side-fixed',
      namedViews: {
        [DaffioRouterNamedViewsEnum.SIDEBAR]: DaffioDocsSidebarContainer,
        // TODO: add docs nav
        [DaffioRouterNamedViewsEnum.NAV]: undefined,
      },
    },
  },
  {
    path: '**',
    component: DaffioApiPageComponent,
    resolve: {
      doc: DocsResolver,
    },
    data: {
      sidebarMode: 'side-fixed',
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(apiRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DaffioDocsApiRoutingModule {}
