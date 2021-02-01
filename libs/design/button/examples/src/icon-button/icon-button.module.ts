import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';

import { IconButtonComponent } from './icon-button.component';


@NgModule({
  declarations: [
    IconButtonComponent,
  ],
  exports: [
    IconButtonComponent,
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class IconButtonModule { }
