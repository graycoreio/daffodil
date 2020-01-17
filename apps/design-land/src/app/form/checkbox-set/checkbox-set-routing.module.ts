import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DocsCheckboxSetComponent } from './checkbox-set.component';

export const checkboxRoutes: Routes = [
  {path: '', component: DocsCheckboxSetComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(checkboxRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DocsCheckboxSetRoutingModule {}
