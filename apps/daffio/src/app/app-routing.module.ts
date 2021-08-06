import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { TemplateComponent } from './core/template/template.component';

export const appRoutes: Routes = [
  {
    path: '', component: TemplateComponent, children: [
      { path: '', pathMatch: 'full', loadChildren: () => import('./content/homepage/homepage.module').then(m => m.DaffioHomepageModule) },
      { path: 'why-pwa', loadChildren: () => import('./content/pwa/pwa.module').then(m => m.DaffioPwaModule) },
      { path: 'support', loadChildren: () => import('./content/support/support.module').then(m => m.DaffioSupportModule) },
      { path: 'api', loadChildren: () => import('./api/api.module').then(m => m.DaffioApiModule) },
      { path: 'guides', loadChildren: () => import('./guides/guides.module').then(m => m.DaffioGuidesModule) },
      { path: '404', loadChildren: () => import('./content/not-found/not-found.module').then(m => m.DaffioNotFoundModule) },
    ],
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      //this ensures that clicking on the same fragment route a second time will scroll to the associated id.
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
