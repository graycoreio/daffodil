import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { DesignLandNativeSelectComponent } from './native-select.component';

const routes: Routes = [
  { path: '', component:  DesignLandNativeSelectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignLandNativeSelectRoutingModule { }
