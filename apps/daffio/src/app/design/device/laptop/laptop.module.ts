import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaptopComponent } from './laptop.component';

@NgModule({
  declarations: [
    LaptopComponent
  ],
  exports: [
    LaptopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LaptopModule { }
