import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpBoxComponent } from './help-box/help-box.component';
import { FooterComponent } from './footer/footer.component';
import { DaffListModule } from '../design/molecules/list/list.module';
import { DaffButtonSetModule } from '../design/molecules/button-set/button-set.module';

@NgModule({
  imports: [
    CommonModule,
    DaffListModule,
    DaffButtonSetModule
  ],
  declarations: [
    HelpBoxComponent,
    FooterComponent
  ],
  exports: [
    HelpBoxComponent,
    FooterComponent
  ]
})
export class MiscModule { }
