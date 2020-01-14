import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DocsFormFieldComponent } from './form-field.component';

export const formFieldRoutes: Routes = [
  {path: '', component: DocsFormFieldComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(formFieldRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DocsFormFieldRoutingModule {}
