import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DocsResolver } from '../docs/resolvers/docs-resolver.service';
import { DaffioApiListPageComponent } from './pages/api-list-page/api-list-page.component';
import { DaffioApiPageComponent } from './pages/api-page/api-page.component';
import { DaffioApiListResolver } from './resolvers/api-list-resolver.service';

export const apiRoutes: Routes = [
  {
    path: '',
    component: DaffioApiListPageComponent,
    resolve: {
      reference: DaffioApiListResolver,
    },
    data: {
      sidebarMode: 'side',
    },
  },
  {
    path: '**',
    component: DaffioApiPageComponent,
    resolve: {
      doc: DocsResolver,
    },
    data: {
      sidebarMode: 'side',
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
