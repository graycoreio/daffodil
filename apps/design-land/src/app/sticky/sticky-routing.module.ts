import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandStickyComponent } from './sticky.component';

export const routes: Routes = [
  { path: '', component: DesignLandStickyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignLandStickyRoutingModule { }
