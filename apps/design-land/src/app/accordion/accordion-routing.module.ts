import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandAccordionComponent } from './accordion.component';

export const accordionRoutes: Routes = [
  { path: '', component: DesignLandAccordionComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(accordionRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandAccordionRoutingModule {}
