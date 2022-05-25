import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';

import { DaffThemeSwitchButtonComponent } from './theme-switch-button.component';

@NgModule({
  declarations: [
    DaffThemeSwitchButtonComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  exports: [
    DaffThemeSwitchButtonComponent,
  ],
})
export class DaffThemeSwitchButtonModule { }
