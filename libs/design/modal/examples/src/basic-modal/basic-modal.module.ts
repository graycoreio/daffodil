import { NgModule } from '@angular/core';

import {
  DaffModalModule,
  DaffButtonModule,
} from '@daffodil/design';

import { BasicModalComponent } from './basic-modal.component';
import { BasicModalContentComponent } from './modal-content.component';

@NgModule({
  imports: [
    DaffModalModule,
    DaffButtonModule,
  ],
  declarations: [
    BasicModalComponent,
    BasicModalContentComponent,
  ],
  exports: [
    BasicModalComponent,
  ],
})
export class BasicModalModule { }
