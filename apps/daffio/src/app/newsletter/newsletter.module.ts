import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffInputModule,
  DaffButtonModule,
  DaffContainerModule,
} from '@daffodil/design';

import { DaffioNewsletterComponent } from './newsletter.component';


@NgModule({
  imports: [
    CommonModule,
    DaffInputModule,
    DaffButtonModule,
    DaffContainerModule,
  ],
  declarations: [
    DaffioNewsletterComponent,
  ],
  exports: [
    DaffioNewsletterComponent,
  ],
})
export class DaffioNewsletterModule { }
