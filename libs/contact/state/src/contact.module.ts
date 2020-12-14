import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/contact.reducer';

@NgModule({
	declarations: [],
	imports: [
		StoreModule.forFeature('contact', reducer)
	],
	providers: [],
})
export class DaffContactModule {}
