import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { 
  DaffListModule, 
  DaffButtonSetModule, 
  DaffButtonModule, 
  DaffContainerModule
} from '@daffodil/design';

import { FooterComponent } from './footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffListModule,
    DaffButtonModule,
    DaffButtonSetModule,
    DaffContainerModule,
    FontAwesomeModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {}
