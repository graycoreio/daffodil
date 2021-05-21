import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';

import { SizableButtonComponent } from './sizable-button.component';


@NgModule({
  declarations: [
    SizableButtonComponent,
  ],
  exports: [
    SizableButtonComponent,
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class SizableButtonModule { }
