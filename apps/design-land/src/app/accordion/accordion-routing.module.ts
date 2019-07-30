import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';

export const accordionRoutes: Routes = [
  {path: '', component: AccordionComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(accordionRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandAccordionRoutingModule {}
