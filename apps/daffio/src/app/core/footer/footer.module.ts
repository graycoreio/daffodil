import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffioSimpleFooterComponent } from './simple-footer/simple-footer.component';
import { DaffioSubFooterComponent } from './sub-footer/sub-footer.component';

import { DaffioNewsletterModule } from '../../newsletter/newsletter.module';

import { 
  DaffCalloutModule,
  DaffListModule, 
  DaffButtonSetModule, 
  DaffButtonModule, 
  DaffContainerModule,
  DaffInputModule
} from '@daffodil/design';

import { DaffLogoModule, DaffCopyrightModule } from '@daffodil/branding';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGitter } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    DaffCalloutModule,
    DaffListModule,
    DaffButtonModule,
    DaffButtonSetModule,
    DaffContainerModule,
    DaffInputModule,
    DaffLogoModule,
    DaffCopyrightModule,
    DaffioNewsletterModule,
    FontAwesomeModule
  ],
  declarations: [
    DaffioSimpleFooterComponent,
    DaffioSubFooterComponent
  ],
  exports: [
    DaffioSimpleFooterComponent,
    DaffioSubFooterComponent
  ]
})
export class DaffioFooterModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faGithub, faGitter);
  }
}