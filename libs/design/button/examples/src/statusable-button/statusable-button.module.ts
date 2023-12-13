import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';

import { StatusableButtonComponent } from './statusable-button.component';

@NgModule({
  declarations: [
    StatusableButtonComponent,
  ],
  exports: [
    StatusableButtonComponent,
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class StatusableButtonModule { }
