import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { DesignLandTextareaComponent } from './textarea.component';

const routes: Routes = [
  { path: '', component:  DesignLandTextareaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignLandTextareaRoutingModule { }
