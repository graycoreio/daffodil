import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';

import { FlatButtonComponent } from './flat-button.component';

@NgModule({
  declarations: [
    FlatButtonComponent,
  ],
  exports: [
    FlatButtonComponent,
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class FlatButtonModule { }
