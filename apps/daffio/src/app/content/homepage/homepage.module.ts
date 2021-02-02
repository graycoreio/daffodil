import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  DaffHeroModule,
  DaffButtonSetModule,
  DaffButtonModule,
  DaffCalloutModule,
  DaffListModule,
  DaffContainerModule,
  DaffAccordionModule,
  DaffFeatureModule,
} from '@daffodil/design';

import { TemplateModule } from '../../core/template/template.module';
import { IphoneModule } from '../../design/device/iphone/iphone.module';
import { DaffioHomepageComponent } from './component/homepage.component';
import { DaffioHomepageRoutingModule } from './homepage-routing.module';

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
  ],
  declarations: [
    DaffioHomepageComponent,
  ],
  exports: [
    DaffioHomepageComponent,
  ],
})
export class DaffioHomepageModule { }
