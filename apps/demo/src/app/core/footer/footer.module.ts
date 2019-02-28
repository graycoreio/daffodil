import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { 
  DaffListModule, 
  DaffButtonSetModule, 
  DaffButtonModule, 
  DaffContainerModule,
  DaffLinkModule
} from '@daffodil/design';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffListModule,
    DaffButtonModule,
    DaffButtonSetModule,
    DaffContainerModule,
    DaffLinkModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
