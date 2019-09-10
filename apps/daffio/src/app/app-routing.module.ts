import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TemplateComponent } from './core//template/template.component';

export const appRoutes: Routes = [
  {
    path: '', component: TemplateComponent, children: [
      { path: '', pathMatch: 'full', loadChildren: () => import('./content/homepage/homepage.module').then(m => m.DaffioHomepageModule)},
      { path: 'why-pwa', loadChildren: () => import('./content/pwa/pwa.module').then(m => m.DaffioPwaModule) },
      { path: 'support', loadChildren: () => import('./content/support/support.module').then(m => m.DaffioSupportModule) },
      { path: 'docs', loadChildren: () => import('./docs/docs.module').then(m => m.DaffioDocsModule)},
      { path: '404', loadChildren: () => import('./content/not-found/not-found.module').then(m => m.DaffioNotFoundModule) },
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
