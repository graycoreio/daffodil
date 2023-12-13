import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';

import { UnderlineButtonComponent } from './underline-button.component';

@NgModule({
  declarations: [
    UnderlineButtonComponent,
  ],
  exports: [
    UnderlineButtonComponent,
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class UnderlineButtonModule { }
