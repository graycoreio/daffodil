import { Routes } from '@angular/router';

import { DAFF_DOCS_PATH } from '@daffodil/docs-utils';

import { homeRoute } from './content/home/home.route';
import { notFoundRoute } from './content/not-found/not-found.route';
import { supportRoute } from './content/support/support.route';
import { DaffioMarketingFooterComponent } from './core/footer/marketing-footer/marketing-footer.component';
import { DaffioMarketingNavContainer } from './core/nav/marketing/marketing.component';
import { DAFF_MARKETING_NAV_SIDEBAR_REGISTRATION } from './core/nav/marketing-sidebar.provider';
import { DaffioRouterNamedViewsEnum } from './core/router/named-views/models/named-views.enum';
import { DaffioRoute } from './core/router/route.type';
import { TemplateComponent } from './core/template/template.component';

const DOCS_REDIRECTED_ROUTES = [
  'api',
  'packages',
];

export const appRoutes: Routes = [
	<DaffioRoute>{
	  path: '',
	  component: TemplateComponent,
	  data: {
	    daffNamedViews: {
	      [DaffioRouterNamedViewsEnum.NAV]: DaffioMarketingNavContainer,
	    },
	    daffioSidebars: {
	      [DAFF_MARKETING_NAV_SIDEBAR_REGISTRATION.id]: DAFF_MARKETING_NAV_SIDEBAR_REGISTRATION,
	    },
	    daffioNavLinks: [
	      { url: '/docs', title: 'Docs' },
	      { url: 'https://github.com/sponsors/graycoreio', title: 'Sponsor', external: true },
	      { url: 'https://github.com/graycoreio/daffodil/blob/develop/CONTRIBUTING.md', title: 'Contribute', external: true },
	    ],
	  },
	  children: [
			<DaffioRoute>{
			  path: '',
			  children: [
			    homeRoute,
			    ...notFoundRoute,
			    ...supportRoute,
			  ],
			  data: {
			    daffNamedViews: {
			      [DaffioRouterNamedViewsEnum.FOOTER]: DaffioMarketingFooterComponent,
			    },
			  },
			},
			{
			  path: DAFF_DOCS_PATH,
			  loadChildren: () => import('./docs/docs.routes').then(r => r.daffioDocsRoutes),
			},
			...DOCS_REDIRECTED_ROUTES.map((path) => ({
			  path,
			  children: [
			    {
			      path: '**',
			      redirectTo: (activatedRoute) => `/${DAFF_DOCS_PATH}/${path}/${activatedRoute.url.join('/')}`,
			    },
			  ],
			})),
	  ],
	},
	{
	  path: '**',
	  redirectTo: '/404',
	},
];
