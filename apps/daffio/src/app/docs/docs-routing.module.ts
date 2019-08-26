import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DocResolver } from './shared/resolvers/doc-resolver.service';
import { DaffioDocViewComponent } from './shared/views/doc/doc-view.component';

export const docsRoutes: Routes = [
  { path: 'api', loadChildren: './api-docs/api.module#DaffioDocsApiModule' },
  {
    path: '**', 
    component: DaffioDocViewComponent, 
    resolve: {
      doc: DocResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(docsRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DaffioDocsRoutingModule { }
