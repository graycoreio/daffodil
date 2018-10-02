import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter.component';
import { DaffInputModule } from '../design/atoms/form/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    DaffInputModule
  ],
  declarations: [
    NewsletterComponent
  ],
  exports: [
    NewsletterComponent
  ]
})
export class NewsletterModule { }
