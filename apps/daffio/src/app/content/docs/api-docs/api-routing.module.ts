import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ApiDocsListViewComponent } from './views/api-docs-list/api-docs-list-view.component';
import { ApiDocViewComponent } from './views/api-doc/api-doc-view.component';

export const apiRoutes: Routes = [
  {path: '', component: ApiDocsListViewComponent},
  {path: '**', component: ApiDocViewComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(apiRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DaffioDocsApiRoutingModule {}
