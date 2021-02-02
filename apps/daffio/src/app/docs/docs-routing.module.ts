import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffioDocsTemplateComponent } from './shared/components/docs-template/docs-template.component';
import { DocResolver } from './shared/resolvers/doc-resolver.service';
import { DaffioDocViewComponent } from './shared/views/doc/doc-view.component';

export const docsRoutes: Routes = [
  { path: '',
    component: DaffioDocsTemplateComponent,
    data: {
      sidebarMode: 'side',
    },
    children: [
      { path: 'api', loadChildren: () => import('./api-docs/api.module').then(m => m.DaffioDocsApiModule) },
      {
        path: '**',
        component: DaffioDocViewComponent,
        resolve: {
          doc: DocResolver,
        },
      },
    ]},
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
