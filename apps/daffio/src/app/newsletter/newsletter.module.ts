import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffioNewsletterComponent } from './newsletter.component';

import { DaffInputModule, DaffButtonModule, DaffContainerModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffInputModule,
    DaffButtonModule,
    DaffContainerModule
  ],
  declarations: [
    DaffioNewsletterComponent
  ],
  exports: [
    DaffioNewsletterComponent
  ]
})
export class DaffioNewsletterModule { }
