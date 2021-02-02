import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IphoneComponent } from './iphone.component';

@NgModule({
  declarations: [
    IphoneComponent,
  ],
  exports: [
    IphoneComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class IphoneModule { }
