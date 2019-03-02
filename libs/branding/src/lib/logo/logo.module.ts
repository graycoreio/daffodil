import { NgModule } from '@angular/core';
import { DaffLogoComponent } from './logo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [DaffLogoComponent],
  exports: [DaffLogoComponent]
})
export class DaffLogoModule { }
