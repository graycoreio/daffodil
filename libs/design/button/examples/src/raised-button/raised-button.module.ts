import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';

import { RaisedButtonComponent } from './raised-button.component';

@NgModule({
  declarations: [
    RaisedButtonComponent,
  ],
  exports: [
    RaisedButtonComponent,
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class RaisedButtonModule { }
