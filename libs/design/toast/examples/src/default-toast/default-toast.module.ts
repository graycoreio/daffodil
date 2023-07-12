import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';
import { DaffToastModule } from '@daffodil/design/toast';

import { DefaultToastComponent } from './default-toast.component';

@NgModule({
  declarations: [
    DefaultToastComponent,
  ],
  imports: [
    CommonModule,
    DaffToastModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  exports: [
    DefaultToastComponent,
  ],
})
export class DefaultToastModule { }
