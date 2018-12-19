import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpBoxComponent } from './help-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HelpBoxComponent
  ],
  exports: [
    HelpBoxComponent
  ]
})
export class HelpBoxModule { }
