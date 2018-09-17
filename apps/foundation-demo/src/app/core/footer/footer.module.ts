import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffListModule } from '../../design/molecules/list/list.module';
import { DaffButtonSetModule } from '../../design/molecules/button-set/button-set.module';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    DaffListModule,
    DaffButtonSetModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
