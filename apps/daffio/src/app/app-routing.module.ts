import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffioDocsHeaderContainer } from './core/header/containers/docs-header/docs-header.component';
import { DaffioMarketingHeaderContainer } from './core/header/containers/marketing-header/marketing-header.component';
import { DaffRouteWithNamedViews } from '@daffodil/router';
import { DaffioDocsSidebarComponent } from './core/sidebar/components/docs-sidebar/docs-sidebar.component';
import { DaffioMarketingSidebarComponent } from './core/sidebar/components/marketing-sidebar/marketing-sidebar.component';
import { TemplateComponent } from './core/template/template.component';
import { DaffioRouterNamedViewsEnum } from './named-views/models/named-views.enum';

export const appRoutes: Routes = [
  {
    path: '', component: TemplateComponent,
    children: [
      <DaffRouteWithNamedViews>{
        path: '',
        children: [
          { path: '', pathMatch: 'full', loadChildren: () => import('./content/home/home.module').then(m => m.DaffioHomeModule) },
          { path: 'why-pwa', loadChildren: () => import('./content/why-pwa/why-pwa.module').then(m => m.DaffioWhyPwaModule) },
          { path: 'support', loadChildren: () => import('./content/support/support.module').then(m => m.DaffioSupportModule) },
          { path: '404', loadChildren: () => import('./content/not-found/not-found.module').then(m => m.DaffioNotFoundModule) },
        ],
        data: {
          daffNamedViews: {
            [DaffioRouterNamedViewsEnum.NAV]: DaffioMarketingHeaderContainer,
            [DaffioRouterNamedViewsEnum.SIDEBAR]: DaffioMarketingSidebarComponent,
          },
        },
      },

      <DaffRouteWithNamedViews>{
        path: '',
        children: [
          { path: 'api', loadChildren: () => import('./api/api.module').then(m => m.DaffioApiModule) },
          { path: 'guides', loadChildren: () => import('./guides/guides.module').then(m => m.DaffioGuidesModule) },
        ],
        data: {
          daffNamedViews: {
            [DaffioRouterNamedViewsEnum.NAV]: DaffioDocsHeaderContainer,
            [DaffioRouterNamedViewsEnum.SIDEBAR]: DaffioDocsSidebarComponent,
          },
        },
      },
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
      initialNavigation: 'enabledBlocking',
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
