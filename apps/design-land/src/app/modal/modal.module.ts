import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  DaffModalModule,
  DaffArticleModule,
  DaffButtonModule
} from '@daffodil/design';

import { DesignLandModalComponent } from './modal.component';
import { DesignLandModalContentComponent } from './modal-content/modal-content.component';
import { DesignLandModalRoutingModule } from './modal-routing.module';

@NgModule({
  declarations: [
    DesignLandModalComponent,
    DesignLandModalContentComponent,
  ],
  imports: [
    CommonModule,
    DesignLandModalRoutingModule,
    DaffModalModule,
    DaffArticleModule,
    DaffButtonModule
  ],
  entryComponents: [
    DesignLandModalContentComponent
  ]
})
export class ModalModule { 
}
