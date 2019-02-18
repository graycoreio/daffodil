import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TemplateModule } from '../../core/template/template.module';

import { DaffioPwaComponent } from './pages/pwa/pwa.component';
import { DaffioPwaRoutingModule } from './pwa-routing.module';

import {
  DaffContainerModule,
  DaffHeroModule,
  DaffFeatureModule,
  DaffCalloutModule,
  DaffListModule,
  DaffCardModule
} from '@daffodil/design';

import { DaffioFeatureComparisonModule } from './components/feature-comparison/feature-comparison.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
    TemplateModule,
    DaffioFeatureComparisonModule,

    DaffioPwaRoutingModule,

    DaffContainerModule,
    DaffHeroModule,
    DaffFeatureModule,
    DaffCalloutModule,
    DaffListModule,
    DaffCardModule
  ],
  declarations: [
    DaffioPwaComponent
  ],
  exports: [
    DaffioPwaComponent
  ]
})
export class DaffioPwaModule { }
