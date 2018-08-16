import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { HelpBoxComponent } from './help-box/help-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NotFoundComponent,
    HelpBoxComponent
  ],
  exports: [
    NotFoundComponent,
    HelpBoxComponent
  ]
})
export class MiscModule { }
