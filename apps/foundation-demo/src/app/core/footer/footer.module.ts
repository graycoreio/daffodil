import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffListModule } from '../../design/molecules/list/list.module';
import { DaffButtonSetModule } from '../../design/molecules/button-set/button-set.module';
import { FooterComponent } from './footer.component';
import { DaffButtonModule } from '../../design/atoms/button/button.module';
import { DaffContainerModule } from '../../design/atoms/container/container.module';

@NgModule({
  imports: [
    CommonModule,
    DaffListModule,
    DaffButtonModule,
    DaffButtonSetModule,
    DaffContainerModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
