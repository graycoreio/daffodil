import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffModalModule,
  DaffArticleModule,
  DaffButtonModule,
} from '@daffodil/design';

import { DesignLandModalContentComponent } from './modal-content/modal-content.component';
import { DesignLandModalRoutingModule } from './modal-routing.module';
import { DesignLandModalComponent } from './modal.component';

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
    DaffButtonModule,
  ],
})
export class DesignLandModalModule {
}
