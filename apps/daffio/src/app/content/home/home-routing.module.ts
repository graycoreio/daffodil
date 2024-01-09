import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
}  from '@angular/router';

import { DaffioHomeViewComponent } from './view/home-view.component';
import { DaffioMarketingHeaderContainer } from '../../core/header/containers/marketing-header/marketing-header.component';
import { DaffioRouterNamedViewsEnum } from '../../core/router/named-view/models/named-views.enum';
import { RouteWithNamedViews } from '../../core/router/named-view/models/route.type';

const homepage: Routes = [
  <RouteWithNamedViews>{
    path: '',
    pathMatch: 'full',
    component: DaffioHomeViewComponent,
    data: {
      title: 'Modern front-end development toolkit for ecommerce PWAs',
      description: 'Build your store with ease and flexibility — take advantage of the cutting edge with Angular (6+), Redux and Progressive Web Apps.',
      namedViews: {
        [DaffioRouterNamedViewsEnum.NAV]: DaffioMarketingHeaderContainer,
      },
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(homepage),
  ],
  exports: [
    RouterModule,
  ],
})
export class DaffioHomeRoutingModule {}
