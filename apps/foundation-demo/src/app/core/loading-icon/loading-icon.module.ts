import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingIconComponent } from './loading-icon/loading-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingIconComponent
  ],
  exports: [
    LoadingIconComponent
  ]
})
export class LoadingIconModule { }
