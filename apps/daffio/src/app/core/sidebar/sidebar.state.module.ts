import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffioSidebarRoutingModeEffects } from './effects/sidebar-routing-mode.effects';
import { DaffioSidebarEffects } from './effects/sidebar.effects';
import { reducers } from './reducers/index';

@NgModule({
  imports: [
    StoreModule.forFeature('daffioSidebar', reducers),
    EffectsModule.forFeature([DaffioSidebarEffects, DaffioSidebarRoutingModeEffects]),
  ],
})
export class DaffioSidebarStateModule { }
