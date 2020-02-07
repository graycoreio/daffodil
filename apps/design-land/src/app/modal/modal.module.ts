import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  DaffModalModule, 
  DaffFeatureModule, 
  DaffButtonModule,
  DaffCardModule 
} from '@daffodil/design';

import { ModalComponent } from './modal.component';
import { DesignLandModalContentComponent } from './modal-content/modal-content.component';
import { DesignLandModalRoutingModule } from './modal-routing.module';

@NgModule({
  declarations: [
    ModalComponent,
    DesignLandModalContentComponent,
  ],
  imports: [
    CommonModule,
    DesignLandModalRoutingModule,
    DaffModalModule,
    DaffButtonModule,
    DaffFeatureModule,
    DaffCardModule
  ],
  entryComponents: [
    DesignLandModalContentComponent
  ]
})
export class ModalModule { 
}
