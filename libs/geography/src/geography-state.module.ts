import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { daffGeographyReducers } from './reducers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature('geography', daffGeographyReducers),
  ]
})
export class DaffGeographyStateModule {}
