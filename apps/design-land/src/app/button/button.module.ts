import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';
import { DesignLandButtonRoutingModule } from './button-routing.module';

import { DaffButtonSetModule, DaffButtonModule } from '@daffodil/design';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,

    DesignLandButtonRoutingModule,
    DaffButtonSetModule,
    DaffButtonModule,
    FontAwesomeModule
  ]
})
export class ButtonModule { 

  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faPlus);
  }
}
