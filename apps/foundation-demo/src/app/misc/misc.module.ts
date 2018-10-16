import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpBoxComponent } from './help-box/help-box.component';
import { DaffListModule, DaffButtonSetModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffListModule,
    DaffButtonSetModule
  ],
  declarations: [
    HelpBoxComponent,
  ],
  exports: [
    HelpBoxComponent,
  ]
})
export class MiscModule { }
