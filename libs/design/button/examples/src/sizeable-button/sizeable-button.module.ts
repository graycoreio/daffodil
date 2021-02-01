import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';

import { SizeableButtonComponent } from './sizeable-button.component';


@NgModule({
  declarations: [
    SizeableButtonComponent,
  ],
  exports: [
    SizeableButtonComponent,
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class SizeableButtonModule { }
