import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffioSidebarRoutingModeEffects } from './effects/sidebar-routing-mode.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([DaffioSidebarRoutingModeEffects]),
  ],
})
export class DaffioSidebarStateModule { }
