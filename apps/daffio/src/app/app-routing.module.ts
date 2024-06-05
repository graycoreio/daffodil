import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffRouteWithNamedViews } from '@daffodil/router';

import { DaffioMarketingFooterComponent } from './core/footer/marketing-footer/marketing-footer.component';
import { DaffioMarketingHeaderContainer } from './core/header/containers/marketing-header/marketing-header.component';
import { DaffioMarketingSidebarContentComponent } from './core/sidebar/components/marketing-sidebar-content/marketing-sidebar-content.component';
import { DaffioSidebarFooterComponent } from './core/sidebar/components/sidebar-footer/sidebar-footer.component';
import { DaffioSidebarHeaderComponent } from './core/sidebar/components/sidebar-header/sidebar-header.component';
import { TemplateComponent } from './core/template/template.component';
import { DaffioRouterNamedViewsEnum } from './named-views/models/named-views.enum';



export const appRoutes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    data: {
      daffNamedViews: {
        [DaffioRouterNamedViewsEnum.SIDEBARHEADER]: DaffioSidebarHeaderComponent,
        [DaffioRouterNamedViewsEnum.SIDEBARFOOTER]: DaffioSidebarFooterComponent,
      },
    },
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
            [DaffioRouterNamedViewsEnum.SIDEBARCONTENT]: DaffioMarketingSidebarContentComponent,
            [DaffioRouterNamedViewsEnum.FOOTER]: DaffioMarketingFooterComponent,
          },
        },
      },
      {
        path: '',
        children: [
          { path: 'docs', loadChildren: () => import('./docs/docs.module').then(m => m.DaffioDocsModule) },
        ],
      },
      {
        path: 'packages/*',
        // TODO: use dynamic redirect once we're on ng18
        redirectTo: 'docs/packages/*',
      },
      {
        path: 'api/*',
        // TODO: use dynamic redirect once we're on ng18
        redirectTo: 'docs/api/*',
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
