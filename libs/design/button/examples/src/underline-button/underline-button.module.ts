import { NgModule } from '@angular/core';

import { UnderlineButtonComponent } from './underline-button.component';

import { DaffButtonModule } from '@daffodil/design';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    UnderlineButtonComponent
  ],
  exports: [
    UnderlineButtonComponent
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule
  ]
})
export class UnderlineButtonModule { }