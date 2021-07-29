import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandSidebarComponent } from './sidebar.component';

const routes: Routes = [
  { path: '', component: DesignLandSidebarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignLandSidebarRoutingModule { }
