import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffContactDriver } from '../injection-tokens/contact-driver.token';
import { DaffContactTransformer } from '../injection-tokens/contact-transfomer.token';
import { DaffContactConfig } from '../injection-tokens/contact-config.token';
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
        {provide: DaffContactDriver, useExisting: DaffContactHubspotService},
        {provide: DaffContactConfig, useValue: config},
        {provide: DaffContactTransformer, useExisting: DaffContactHubspotTransformer}
      ]
    }
  }
} 