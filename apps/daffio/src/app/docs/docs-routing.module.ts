import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DocResolver } from './shared/resolvers/doc-resolver.service';
import { DaffioDocViewComponent } from './shared/views/doc/doc-view.component';

export const docsRoutes: Routes = [
  { path: '', loadChildren: () => import('./api-docs/api.module').then(m => m.DaffioDocsApiModule),
    data: {
      sidebarMode: 'side',
    }},
  {
    path: '**',
    component: DaffioDocViewComponent,
    resolve: {
      doc: DocResolver,
    },
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
