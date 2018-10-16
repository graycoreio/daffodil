import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffListModule } from '@daffodil/design';
import { DaffButtonSetModule } from '@daffodil/design';

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
