import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffTextareaComponent } from './textarea.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    DaffTextareaComponent,
  ],
  declarations: [
    DaffTextareaComponent,
  ],
})
export class DaffTextareaModule {}
