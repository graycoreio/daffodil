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
  DaffFeatureModule
} from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
    TemplateModule,

    DaffioHomepageRoutingModule,

    DaffHeroModule,
    DaffButtonSetModule,
    DaffButtonModule,
    DaffCalloutModule,
    DaffListModule,
    DaffContainerModule,
    DaffAccordionModule,
    DaffFeatureModule
  ],
  declarations: [
    DaffioHomepageComponent
  ],
  exports: [
    DaffioHomepageComponent
  ]
})
export class DaffioHomepageModule { }
