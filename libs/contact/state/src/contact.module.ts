import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffContactEffects } from './effects/contact.effects';
import { reducer } from './reducers/contact.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('contact', reducer),
    EffectsModule.forFeature([DaffContactEffects]),
  ],
  providers: [],
})
export class DaffContactStateModule { }
