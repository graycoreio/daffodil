import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsletterComponent } from './newsletter.component';

import { DaffInputModule, DaffButtonModule, DaffContainerModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffInputModule,
    DaffButtonModule,
    DaffContainerModule
  ],
  declarations: [
    NewsletterComponent
  ],
  exports: [
    NewsletterComponent
  ]
})
export class NewsletterModule { }
