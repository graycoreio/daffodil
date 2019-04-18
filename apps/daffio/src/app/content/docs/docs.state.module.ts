import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('daffioDocs', reducers)
  ]
})
export class DaffioDocsStateModule { }
