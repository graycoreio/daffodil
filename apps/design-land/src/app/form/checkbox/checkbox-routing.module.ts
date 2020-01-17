import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DocsCheckboxComponent } from './checkbox.component';

export const checkboxRoutes: Routes = [
  {path: '', component: DocsCheckboxComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(checkboxRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DocsCheckboxRoutingModule {}
