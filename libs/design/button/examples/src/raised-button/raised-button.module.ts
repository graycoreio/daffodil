import { NgModule } from '@angular/core';

import { RaisedButtonComponent } from './raised-button.component';

import { DaffButtonModule } from '@daffodil/design';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    RaisedButtonComponent
  ],
  exports: [
    RaisedButtonComponent
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule
  ]
})
export class RaisedButtonModule { }