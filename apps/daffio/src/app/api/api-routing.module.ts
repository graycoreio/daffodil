import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffioApiListPageComponent } from './pages/api-list-page/api-list-page.component';
import { DaffioApiPageComponent } from './pages/api-page/api-page.component';
import { DaffioApiListResolver } from './resolvers/api-list-resolver.service';
import { RouteWithNamedViews } from '../core/router/named-view/models/route.type';
import { DaffioDocsSidebarContainer } from '../docs/containers/sidebar/sidebar.component';
import { DocsResolver } from '../docs/resolvers/docs-resolver.service';

export const apiRoutes: Routes = [
  <RouteWithNamedViews>{
    path: '',
    component: DaffioApiListPageComponent,
    resolve: {
      reference: DaffioApiListResolver,
    },
    data: {
      sidebarMode: 'side-fixed',
      namedViews: {
        sidebar: DaffioDocsSidebarContainer,
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
