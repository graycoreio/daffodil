import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LetDirective } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffSidebarModule } from '@daffodil/design/sidebar';
import { DaffRouterNamedViewOutletModule } from '@daffodil/router';

import { DaffioSidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioSidebarRoutingModeEffects } from './effects/sidebar-routing-mode.effects';
import { DaffioSidebarStateModule } from './sidebar.state.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    LetDirective,
    DaffioSidebarStateModule,

    DaffSidebarModule,
    DaffButtonModule,

    DaffRouterNamedViewOutletModule,
  ],
  declarations: [
    DaffioSidebarViewportContainer,
  ],
  exports: [
    DaffioSidebarViewportContainer,
  ],
})
export class DaffioSidebarModule {}
