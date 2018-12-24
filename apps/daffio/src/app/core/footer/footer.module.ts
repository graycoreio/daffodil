import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffioFooterComponent } from './footer.component';
import { DaffioNewsletterModule } from '../../newsletter/newsletter.module';
import { DaffioLogoModule } from '../logo/logo.module';

import { 
  DaffListModule, 
  DaffButtonSetModule, 
  DaffButtonModule, 
  DaffContainerModule,
  DaffInputModule,
  DaffLinkModule
} from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    DaffListModule,
    DaffButtonModule,
    DaffButtonSetModule,
    DaffContainerModule,
    DaffInputModule,
    DaffLinkModule,
    DaffioLogoModule,
    DaffioNewsletterModule
  ],
  declarations: [
    DaffioFooterComponent
  ],
  exports: [
    DaffioFooterComponent
  ]
})
export class DaffioFooterModule { }
