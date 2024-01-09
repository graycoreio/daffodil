import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
}  from '@angular/router';

import { DaffioHomeViewComponent } from './view/home-view.component';

const homepage: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DaffioHomeViewComponent,
    data: {
      title: 'Modern front-end development toolkit for ecommerce PWAs',
      description: 'Build your store with ease and flexibility — take advantage of the cutting edge with Angular (6+), Redux and Progressive Web Apps.',
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
