import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffDecorativeIconModule } from '@daffodil/design';

import { DecorativeIconThemingComponent } from './decorative-icon-theming.component';


@NgModule({
  declarations: [
    DecorativeIconThemingComponent,
  ],
  exports: [
    DecorativeIconThemingComponent,
  ],
  imports: [
    DaffDecorativeIconModule,
    FontAwesomeModule,
  ],
})
export class DecorativeIconThemingModule { }
