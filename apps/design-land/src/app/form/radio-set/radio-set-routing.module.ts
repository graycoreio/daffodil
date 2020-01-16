
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DocsRadioSetComponent } from './radio-set.component';

export const radioSetRoutes: Routes = [
  {path: '', component: DocsRadioSetComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(radioSetRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DocsRadioSetRoutingModule {}
