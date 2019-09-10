import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffListModule } from '@daffodil/design';

import { DesignLandListRoutingModule } from './list-routing.module';

import { ListComponent } from './list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    DaffListModule,
    DesignLandListRoutingModule,
    FontAwesomeModule
  ]
})
export class ListModule {
  
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faTwitter);
  }
}
