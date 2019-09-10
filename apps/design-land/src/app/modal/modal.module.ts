import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { DaffModalModule } from '@daffodil/design';
import { DaffFeatureModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design';

import { DesignLandModalRoutingModule } from './modal-routing.module';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    DesignLandModalRoutingModule,
    DaffModalModule,
    DaffButtonModule,
    DaffFeatureModule

  ]
})
export class ModalModule { 
}
