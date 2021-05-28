import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';
import { DaffioDocViewerComponent } from './shared/components/doc-viewer/doc-viewer.component';

import { DocResolver } from './shared/resolvers/doc-resolver.service';

export const docsRoutes: Routes = [
  { path: '', loadChildren: () => import('./api-docs/api.module').then(m => m.DaffioDocsApiModule),
    data: {
      sidebarMode: 'side',
    }},
  {
    path: '**',
    component: DaffioDocViewerComponent,
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
