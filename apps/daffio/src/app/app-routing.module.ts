import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DAFF_DOCS_PATH } from '@daffodil/docs-utils';

import { DaffioMarketingFooterComponent } from './core/footer/marketing-footer/marketing-footer.component';
import { DaffioMarketingNavContainer } from './core/nav/marketing/marketing.component';
import { DAFF_NAV_SIDEBAR_REGISTRATION } from './core/nav/sidebar.provider';
import { DaffioRouterNamedViewsEnum } from './core/router/named-views/models/named-views.enum';
import { DaffioRoute } from './core/router/route.type';
import { TemplateComponent } from './core/template/template.component';
import { daffioDocsRedirectMatcher } from './redirect/docs';

export const appRoutes: Routes = [
  <DaffioRoute>{
    path: '',
    component: TemplateComponent,
    data: {
      daffNamedViews: {
        [DaffioRouterNamedViewsEnum.NAV]: DaffioMarketingNavContainer,
      },
      daffioSidebars: {
        [DAFF_NAV_SIDEBAR_REGISTRATION.id]: DAFF_NAV_SIDEBAR_REGISTRATION,
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
            [DaffioRouterNamedViewsEnum.FOOTER]: DaffioMarketingFooterComponent,
          },
        },
      },
      {
        path: DAFF_DOCS_PATH,
        loadChildren: () => import('./docs/docs.module').then(m => m.DaffioDocsModule),
      },
      {
        matcher: daffioDocsRedirectMatcher,
        redirectTo: (activatedRoute) =>
          `/${DAFF_DOCS_PATH}/${activatedRoute.url.join('/')}`,
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
