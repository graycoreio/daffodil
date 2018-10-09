import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffNewsletterComponent } from './newsletter.component';
import { DaffInputModule } from '../design/atoms/form/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    DaffInputModule
  ],
  declarations: [
    DaffNewsletterComponent
  ],
  exports: [
    DaffNewsletterComponent
  ]
})
export class DaffNewsletterModule { }
