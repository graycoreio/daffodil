import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/newsletter.reducer'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('newsletter', reducer)
  ]
})
export class DaffNewsletterModule { }
