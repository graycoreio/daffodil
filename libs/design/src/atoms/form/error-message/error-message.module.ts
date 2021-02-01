import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffErrorMessageComponent } from './error-message.component';

@NgModule({
  exports: [
    DaffErrorMessageComponent,
  ],
  declarations: [
    DaffErrorMessageComponent,
  ],
})
export class DaffErrorMessageModule { }
