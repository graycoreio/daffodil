import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DocResolver } from '../shared/resolvers/doc-resolver.service';
import { DaffioGuideViewComponent } from './views/guide-view.component';

export const docsRoutes: Routes = [
  {
    path: '**',
    component: DaffioGuideViewComponent,
    resolve: {
      doc: DocResolver,
    },
    data: {
      sidebarMode: 'side',
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
export class DaffioGuideDocsRoutingModule { }
