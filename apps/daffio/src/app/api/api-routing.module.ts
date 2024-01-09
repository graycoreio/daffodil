import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffioApiListPageComponent } from './pages/api-list-page/api-list-page.component';
import { DaffioApiPageComponent } from './pages/api-page/api-page.component';
import { DaffioApiListResolver } from './resolvers/api-list-resolver.service';
import { DaffRouteWithNamedViews } from '../core/router/named-view/models/route.type';
import { DocsResolver } from '../docs/resolvers/docs-resolver.service';

export const apiRoutes: Routes = [
  <DaffRouteWithNamedViews>{
    path: '',
    component: DaffioApiListPageComponent,
    resolve: {
      reference: DaffioApiListResolver,
    },
  },
  {
    path: '**',
    component: DaffioApiPageComponent,
    resolve: {
      doc: DocsResolver,
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
