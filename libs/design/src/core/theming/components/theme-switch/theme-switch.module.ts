import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';

import { DaffThemeSwitchComponent } from './theme-switch.component';

@NgModule({
  declarations: [
    DaffThemeSwitchComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  exports: [
    DaffThemeSwitchComponent,
  ],
})
export class DaffThemeSwitchModule { }
