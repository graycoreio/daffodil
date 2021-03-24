import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffInputModule,
  DaffButtonModule,
  DaffContainerModule,
} from '@daffodil/design';
import { DaffNewsletterStateModule } from '@daffodil/newsletter/state';

import { NewsletterComponent } from './newsletter.component';



@NgModule({
  imports: [
    CommonModule,
    DaffInputModule,
    DaffButtonModule,
    DaffContainerModule,
    DaffNewsletterStateModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NewsletterComponent,
  ],
  exports: [
    NewsletterComponent,
  ],
})
export class NewsletterModule { }
