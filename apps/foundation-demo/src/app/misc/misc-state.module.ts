import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './header/reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('foundationHeader', reducers)
  ]
})
export class FoundationMiscStateModule { }
