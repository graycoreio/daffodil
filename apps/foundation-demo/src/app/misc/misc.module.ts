import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
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
    NotFoundComponent,
    HelpBoxComponent,
    FooterComponent
  ],
  exports: [
    NotFoundComponent,
    HelpBoxComponent,
    FooterComponent
  ]
})
export class MiscModule { }
