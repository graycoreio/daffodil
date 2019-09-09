import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { newsletter_reducer } from './reducers/newsletter.reducer'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      newsletter: newsletter_reducer
    })
  ]
})
export class DaffNewsletterModule { }
