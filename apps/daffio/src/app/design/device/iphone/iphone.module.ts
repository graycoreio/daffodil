import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IphoneComponent } from './iphone.component';

@NgModule({
  declarations: [
    IphoneComponent
  ],
  exports: [
      IphoneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IphoneModule { }
