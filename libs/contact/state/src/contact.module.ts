import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffContactEffects } from './effects/contact.effects';
import { daffContactStateReducer } from './reducers/contact.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('contact', daffContactStateReducer),
    EffectsModule.forFeature([DaffContactEffects]),
  ],
  providers: [],
})
export class DaffContactStateModule { }
