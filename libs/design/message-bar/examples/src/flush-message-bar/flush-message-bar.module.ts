import { NgModule } from '@angular/core';

import { FlushMessageBarComponent } from './flush-message-bar.component';

import { DaffMessageBarModule } from '@daffodil/design';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    FlushMessageBarComponent,
  ],
  exports: [
    FlushMessageBarComponent
  ],
  imports: [
    DaffMessageBarModule,
    FontAwesomeModule
  ],
})
export class FlushMessageBarModule { }