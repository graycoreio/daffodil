import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsletterComponent } from './newsletter.component';

import { DaffInputModule, DaffButtonModule, DaffContainerModule } from '@daffodil/design';
import { DaffNewsletterStateModule } from '@daffodil/newsletter/state';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DaffInputModule,
    DaffButtonModule,
    DaffContainerModule,
    DaffNewsletterStateModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewsletterComponent
  ],
  exports: [
    NewsletterComponent
  ]
})
export class NewsletterModule { }
