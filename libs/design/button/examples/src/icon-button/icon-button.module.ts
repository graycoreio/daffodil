import { NgModule } from '@angular/core';

import { IconButtonComponent } from './icon-button.component';

import { DaffButtonModule } from '@daffodil/design';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    IconButtonComponent
  ],
  exports: [
    IconButtonComponent
  ],
  imports: [
    DaffButtonModule,
    FontAwesomeModule
  ]
})
export class IconButtonModule { }