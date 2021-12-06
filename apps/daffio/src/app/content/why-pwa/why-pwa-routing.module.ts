import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
}  from '@angular/router';

import { DaffioWhyPwaViewComponent } from './view/why-pwa-view.component';

const pwa: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DaffioWhyPwaViewComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(pwa),
  ],
  exports: [
    RouterModule,
  ],
})
export class DaffioWhyPwaRoutingModule {}
