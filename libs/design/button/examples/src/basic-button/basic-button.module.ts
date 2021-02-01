import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';

import { BasicButtonComponent } from './basic-button.component';


@NgModule({
  declarations: [
    BasicButtonComponent,
  ],
  exports: [
    BasicButtonComponent,
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class BasicButtonModule { }
