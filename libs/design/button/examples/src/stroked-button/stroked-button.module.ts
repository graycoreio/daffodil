import { NgModule } from '@angular/core';

import { StrokedButtonComponent } from './stroked-button.component';

import { DaffButtonModule } from '@daffodil/design';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    StrokedButtonComponent
  ],
  exports: [
    StrokedButtonComponent
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule
  ]
})
export class StrokedButtonModule { }