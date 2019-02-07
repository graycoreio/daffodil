import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffFeatureModule } from '@daffodil/design';

import { DesignLandListRoutingModule } from './list-routing.module';

import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    DaffFeatureModule,
    DesignLandListRoutingModule
  ]
})
export class ListModule { }
