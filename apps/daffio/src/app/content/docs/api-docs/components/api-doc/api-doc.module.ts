import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffioApiDocComponent } from './api-doc.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffioApiDocComponent
  ],
  exports: [
    DaffioApiDocComponent
  ]
})
export class DaffioApiDocModule {}
