import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandSwitchComponent } from './switch.component';

const routes: Routes = [
  { path: '', component: DesignLandSwitchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignLandSwitchRoutingModule { }
