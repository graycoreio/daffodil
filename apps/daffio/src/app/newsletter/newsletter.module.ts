import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffInputModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';

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
