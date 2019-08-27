import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TemplateComponent } from './core//template/template.component';

export const appRoutes: Routes = [
  {
    path: '', component: TemplateComponent, children: [
      { path: '', pathMatch: 'full', loadChildren: './content/homepage/homepage.module#DaffioHomepageModule'},
      { path: 'why-pwa', loadChildren: './content/pwa/pwa.module#DaffioPwaModule' },
      { path: 'support', loadChildren: './content/support/support.module#DaffioSupportModule' },
      { path: 'docs', loadChildren: './docs/docs.module#DaffioDocsModule'}
      { path: '404', loadChildren: './content/not-found/not-found.module#DaffioNotFoundModule' },
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
