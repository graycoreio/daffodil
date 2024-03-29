import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffRouteWithNamedViews } from '@daffodil/router';

import { DaffioMarketingFooterComponent } from './core/footer/marketing-footer/marketing-footer.component';
import { DaffioSimpleFooterComponent } from './core/footer/simple-footer/simple-footer.component';
import { DaffioDocsHeaderContainer } from './core/header/containers/docs-header/docs-header.component';
import { DaffioMarketingHeaderContainer } from './core/header/containers/marketing-header/marketing-header.component';
import { DaffioDocsSidebarContentComponent } from './core/sidebar/components/docs-sidebar-content/docs-sidebar-content.component';
import { DaffioMarketingSidebarContentComponent } from './core/sidebar/components/marketing-sidebar-content/marketing-sidebar-content.component';
import { DaffioSidebarFooterComponent } from './core/sidebar/components/sidebar-footer/sidebar-footer.component';
import { DaffioSidebarHeaderComponent } from './core/sidebar/components/sidebar-header/sidebar-header.component';
import { DaffioDocsSidebarContainer } from './core/sidebar/containers/docs-sidebar/docs-sidebar.component';
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
            [DaffioRouterNamedViewsEnum.SIDEBARHEADER]: DaffioSidebarHeaderComponent,
            [DaffioRouterNamedViewsEnum.SIDEBARCONTENT]: DaffioMarketingSidebarContentComponent,
            [DaffioRouterNamedViewsEnum.SIDEBARFOOTER]: DaffioSidebarFooterComponent,
            [DaffioRouterNamedViewsEnum.FOOTER]: DaffioMarketingFooterComponent,
          },
        },
      },
      <DaffRouteWithNamedViews>{
        path: '',
        children: [
          { path: 'api', loadChildren: () => import('./api/api.module').then(m => m.DaffioApiModule) },
        ],
        data: {
          daffNamedViews: {
            [DaffioRouterNamedViewsEnum.NAV]: DaffioDocsHeaderContainer,
            [DaffioRouterNamedViewsEnum.SIDEBARHEADER]: DaffioSidebarHeaderComponent,
            [DaffioRouterNamedViewsEnum.SIDEBARCONTENT]: DaffioDocsSidebarContentComponent,
            [DaffioRouterNamedViewsEnum.SIDEBARFOOTER]: DaffioSidebarFooterComponent,
            [DaffioRouterNamedViewsEnum.FOOTER]: DaffioSimpleFooterComponent,
          },
        },
      },
      <DaffRouteWithNamedViews>{
        path: '',
        children: [
          { path: 'packages', loadChildren: () => import('./packages/packages.module').then(m => m.DaffioPackagesModule) },
        ],
        data: {
          daffNamedViews: {
            [DaffioRouterNamedViewsEnum.NAV]: DaffioDocsHeaderContainer,
            [DaffioRouterNamedViewsEnum.SIDEBARHEADER]: DaffioSidebarHeaderComponent,
            [DaffioRouterNamedViewsEnum.SIDEBARCONTENT]: DaffioDocsSidebarContainer,
            [DaffioRouterNamedViewsEnum.SIDEBARFOOTER]: DaffioSidebarFooterComponent,
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
