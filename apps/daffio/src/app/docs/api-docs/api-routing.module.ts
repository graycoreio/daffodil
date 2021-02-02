import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DocResolver } from '../shared/resolvers/doc-resolver.service';
import { DaffioApiListResolver } from './resolvers/api-list-resolver.service';
import { DaffioApiDocViewComponent } from './views/api-doc-view/doc-view.component';
import { DaffioApiDocsListViewComponent } from './views/api-docs-list/api-docs-list-view.component';

export const apiRoutes: Routes = [
  {
    path: '',
    component: DaffioApiDocsListViewComponent,
    resolve: {
      reference: DaffioApiListResolver,
    },
  },
  {
    path: '**',
    component: DaffioApiDocViewComponent,
    resolve: {
      doc: DocResolver,
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
