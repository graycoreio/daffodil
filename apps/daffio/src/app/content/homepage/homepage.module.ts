import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TemplateModule } from '../../core/template/template.module';

import { DaffioHomepageComponent } from './component/homepage.component';
import { DaffioHomepageRoutingModule } from './homepage-routing.module';

import {
  DaffHeroModule,
  DaffButtonSetModule,
  DaffButtonModule,
  DaffCalloutModule,
  DaffListModule,
  DaffContainerModule,
  DaffAccordionModule,
  DaffFeatureModule,
  DaffLinkModule
} from '@daffodil/design';
import { IphoneModule } from '../../design/device/iphone/iphone.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
    TemplateModule,
    IphoneModule,

    DaffioHomepageRoutingModule,

    DaffHeroModule,
    DaffButtonSetModule,
    DaffButtonModule,
    DaffCalloutModule,
    DaffListModule,
    DaffContainerModule,
    DaffAccordionModule,
    DaffFeatureModule,
    DaffLinkModule
  ],
  declarations: [
    DaffioHomepageComponent
  ],
  exports: [
    DaffioHomepageComponent
  ]
})
export class DaffioHomepageModule { }
