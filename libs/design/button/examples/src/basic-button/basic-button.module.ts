import { NgModule } from '@angular/core';

import { BasicButtonComponent } from './basic-button.component';

import { DaffButtonModule } from '@daffodil/design';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    BasicButtonComponent
  ],
  exports: [
    BasicButtonComponent
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule
  ]
})
export class BasicButtonModule { }