import { NgModule } from '@angular/core';

import { DismissableMessageBarComponent } from './dismissable-message-bar.component';

import {
  DaffMessageBarModule,
  DaffButtonModule
} from '@daffodil/design';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DismissableMessageBarComponent,
  ],
  exports: [
    DismissableMessageBarComponent
  ],
  imports: [
    DaffMessageBarModule,
    DaffButtonModule,
    FontAwesomeModule
  ],
})
export class DismissableMessageBarModule { }