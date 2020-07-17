import { NgModule } from '@angular/core';

import { SizeableButtonComponent } from './sizeable-button.component';

import { DaffButtonModule } from '@daffodil/design';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SizeableButtonComponent
  ],
  exports: [
    SizeableButtonComponent
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule
  ]
})
export class SizeableButtonModule { }