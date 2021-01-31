import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCopyrightComponent } from './copyright.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffCopyrightComponent,
  ],
  exports: [
    DaffCopyrightComponent,
  ],
})
export class DaffCopyrightModule { }
