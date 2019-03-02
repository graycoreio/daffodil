import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffioFullFooterComponent } from './full-footer/full-footer.component';
import { DaffioSimpleFooterComponent } from './simple-footer/simple-footer.component';
import { DaffioSubFooterComponent } from './sub-footer/sub-footer.component';

import { DaffioNewsletterModule } from '../../newsletter/newsletter.module';


import { 
  DaffCalloutModule,
  DaffListModule, 
  DaffButtonSetModule, 
  DaffButtonModule, 
  DaffContainerModule,
  DaffInputModule,
  DaffLinkModule
} from '@daffodil/design';

import { DaffLogoModule, DaffCopyrightModule } from '@daffodil/branding';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    DaffCalloutModule,
    DaffListModule,
    DaffButtonModule,
    DaffButtonSetModule,
    DaffContainerModule,
    DaffInputModule,
    DaffLinkModule,
    DaffLogoModule,
    DaffCopyrightModule,
    DaffioNewsletterModule
  ],
  declarations: [
    DaffioSimpleFooterComponent,
    DaffioSubFooterComponent
  ],
  exports: [
    DaffioSimpleFooterComponent,
    DaffioSubFooterComponent
  ]
})
export class DaffioFooterModule { }