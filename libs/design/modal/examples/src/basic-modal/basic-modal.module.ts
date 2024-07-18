import { NgModule } from '@angular/core';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffModalModule } from '@daffodil/design/modal';

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
