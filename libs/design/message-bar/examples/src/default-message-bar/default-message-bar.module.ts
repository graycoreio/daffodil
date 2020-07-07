import { NgModule } from '@angular/core';

import { DefaultMessageBarComponent } from './default-message-bar.component';

import { DaffMessageBarModule } from '@daffodil/design';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DefaultMessageBarComponent,
  ],
  exports: [
    DefaultMessageBarComponent
  ],
  imports: [
    DaffMessageBarModule,
    FontAwesomeModule
  ],
})
export class DefaultMessageBarModule { }