import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';

import { StrokedButtonComponent } from './stroked-button.component';

@NgModule({
  declarations: [
    StrokedButtonComponent,
  ],
  exports: [
    StrokedButtonComponent,
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class StrokedButtonModule { }
