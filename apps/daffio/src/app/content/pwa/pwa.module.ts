import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  DaffContainerModule,
  DaffHeroModule,
  DaffFeatureModule,
  DaffCalloutModule,
  DaffListModule,
  DaffCardModule,
} from '@daffodil/design';

import { TemplateModule } from '../../core/template/template.module';
import { DaffioFeatureComparisonModule } from './components/feature-comparison/feature-comparison.module';
import { DaffioPwaComponent } from './pages/pwa/pwa.component';
import { DaffioPwaRoutingModule } from './pwa-routing.module';

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
    DaffCardModule,
  ],
  declarations: [
    DaffioPwaComponent,
  ],
  exports: [
    DaffioPwaComponent,
  ],
})
export class DaffioPwaModule { }
