import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffFormFieldComponent } from '@daffodil/design/form-field';
import { DaffInputModule } from '@daffodil/design/input';
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
    DaffFormFieldComponent,
  ],
  declarations: [
    NewsletterComponent,
  ],
  exports: [
    NewsletterComponent,
  ],
})
export class NewsletterModule { }
