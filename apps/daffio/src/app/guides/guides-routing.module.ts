import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DocsResolver } from '../docs/resolvers/docs-resolver.service';
import { DaffioGuidesPageComponent } from './pages/guides-page.component';

export const docsRoutes: Routes = [
  {
    path: '**',
    component: DaffioGuidesPageComponent,
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
    RouterModule.forChild(docsRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DaffioGuidesRoutingModule { }
