import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { DesignLandInputComponent } from './input.component';

const routes: Routes = [
  { path: '', component:  DesignLandInputComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignLandInputRoutingModule { }
