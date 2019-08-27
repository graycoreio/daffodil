import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { 
  DaffListModule, 
  DaffButtonSetModule, 
  DaffButtonModule, 
  DaffContainerModule
} from '@daffodil/design';

import { FooterComponent } from './footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffListModule,
    DaffButtonModule,
    DaffButtonSetModule,
    DaffContainerModule,
    FontAwesomeModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faTwitter, faFacebookF, faInstagram);
  }
}
