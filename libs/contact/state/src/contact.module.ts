import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './reducers/contact.reducer';
import { DaffContactEffects } from './effects/contact.effects';

@NgModule({
	declarations: [],
	imports: [
		StoreModule.forFeature('contact', reducer),
		EffectsModule.forFeature([DaffContactEffects])
	],
	providers: [],
})
export class DaffContactStateModule { }
