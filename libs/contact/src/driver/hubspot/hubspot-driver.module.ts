import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffContactDriver } from '../interfaces/injection-tokens/contact-driver.token';
import { DaffContactTransformer } from '../interfaces/contact-transfomer.token';
import { DaffContactConfig } from '../interfaces/injection-tokens/contact-config.token';
import { DaffContactHubspotService } from './contact.service';
import { DaffContactHubspotTransformer } from './transformers/contact.transformer';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffContactHubSpotDriverModule {
  static forRoot(config: DaffHubspotConfig): ModuleWithProviders<DaffContactHubSpotDriverModule> {
    return {
      ngModule: DaffContactHubSpotDriverModule,
      providers: [
        {provide: DaffContactDriver, useClass: DaffContactHubspotService},
        {provide: DaffContactConfig, useValue: config},
        {provide: DaffContactTransformer, useClass: DaffContactHubspotTransformer}
      ]
    }
  }
} 