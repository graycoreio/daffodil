import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffNewsletterComponent } from './newsletter.component';
import { DaffInputModule } from '../design/atoms/form/input/input.module';
import { DaffButtonModule } from '../design/atoms/button/button.module';
import { DaffContainerModule } from '../design/atoms/container/container.module';

@NgModule({
  imports: [
    CommonModule,
    DaffInputModule,
    DaffButtonModule,
    DaffContainerModule
  ],
  declarations: [
    DaffNewsletterComponent
  ],
  exports: [
    DaffNewsletterComponent
  ]
})
export class DaffNewsletterModule { }
