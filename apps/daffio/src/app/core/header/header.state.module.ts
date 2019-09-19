import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/header.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DaffioHeaderColorEffects } from './effects/header-color.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('daffioHeader', reducer),
    EffectsModule.forFeature([DaffioHeaderColorEffects])
  ]
})
export class DaffioHeaderStateModule {}
