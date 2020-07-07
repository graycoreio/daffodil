import { NgModule } from '@angular/core';

import { ActionableMessageBarComponent } from './actionable-message-bar.component';

import {
  DaffMessageBarModule,
  DaffButtonModule
} from '@daffodil/design';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ActionableMessageBarComponent,
  ],
  exports: [
    ActionableMessageBarComponent
  ],
  imports: [
    DaffMessageBarModule,
    DaffButtonModule,
    FontAwesomeModule
  ],
})
export class ActionableMessageBarModule { }