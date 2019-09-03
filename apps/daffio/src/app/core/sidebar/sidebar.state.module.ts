import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { DaffioSidebarEffects } from './effects/sidebar.effects';
import { DaffioSidebarRoutingModeEffects } from './effects/sidebar-routing-mode.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('daffioSidebar', reducers),
    EffectsModule.forFeature([DaffioSidebarEffects, DaffioSidebarRoutingModeEffects])
  ]
})
export class DaffioSidebarStateModule { }
