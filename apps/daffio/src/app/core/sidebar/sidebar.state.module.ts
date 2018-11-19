import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { SidebarEffects } from './effects/sidebar.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('daffioSidebar', reducers),
    EffectsModule.forFeature([SidebarEffects]),
  ]
})
export class DaffioSidebarStateModule { }
