import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DaffioMarketingFooterComponent } from './core/footer/marketing-footer/marketing-footer.component';
import { DaffioNavHeaderContainer } from './core/nav/header/header.component';
import { DaffioRoute } from './core/router/route.type';
import { DaffioMarketingSidebarContentComponent } from './core/sidebar/components/marketing-sidebar-content/marketing-sidebar-content.component';
import { DaffioSidebarFooterComponent } from './core/sidebar/components/sidebar-footer/sidebar-footer.component';
import { DaffioSidebarHeaderComponent } from './core/sidebar/components/sidebar-header/sidebar-header.component';
import { TemplateComponent } from './core/template/template.component';
import { DaffioRouterNamedViewsEnum } from './named-views/models/named-views.enum';



export const appRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    component: TemplateComponent,
    data: {
      daffNamedViews: {
        [DaffioRouterNamedViewsEnum.NAV]: DaffioNavHeaderContainer,
        [DaffioRouterNamedViewsEnum.SIDEBARHEADER]: DaffioSidebarHeaderComponent,
        [DaffioRouterNamedViewsEnum.SIDEBARFOOTER]: DaffioSidebarFooterComponent,
      },
      daffioNavLinks: [
        { url: '/why-pwa', title: 'Why PWA' },
        { url: '/docs', title: 'Docs' },
        { url: 'https://github.com/sponsors/graycoreio', title: 'Sponsor', external: true },
      ],
    },
    children: [
      <DaffioRoute>{
        path: '',
        children: [
          { path: '', pathMatch: 'full', loadChildren: () => import('./content/home/home.module').then(m => m.DaffioHomeModule) },
          { path: 'why-pwa', loadChildren: () => import('./content/why-pwa/why-pwa.module').then(m => m.DaffioWhyPwaModule) },
          { path: 'support', loadChildren: () => import('./content/support/support.module').then(m => m.DaffioSupportModule) },
          { path: '404', loadChildren: () => import('./content/not-found/not-found.module').then(m => m.DaffioNotFoundModule) },
        ],
        data: {
          daffNamedViews: {
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
      scrollOffset: [0, 64],
      //this ensures that clicking on the same fragment route a second time will scroll to the associated id.
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
