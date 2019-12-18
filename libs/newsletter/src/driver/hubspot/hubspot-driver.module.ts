import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DaffNewsletterHubspotConfig } from './models/config';
import { DaffNewsletterDriver } from "../injection-tokens/newsletter-driver.token";
import { DaffHubspotNewsletterService } from "./newsletter.service";
import { DaffNewsletterConfig } from "../injection-tokens/newsletter-config.token";
import { DaffNewsletterTransformer } from "../injection-tokens/newsletter-transformer.token";
import { DaffNewsletterHubspotTransformer } from "./transformers/newsletter.transformer";

@NgModule({
  imports: [
    CommonModule
  ]
})

export class DaffNewsletterHubSpotDriverModule {
  static forRoot(config: DaffNewsletterHubspotConfig): ModuleWithProviders<DaffNewsletterHubSpotDriverModule> {
    return {
      ngModule: DaffNewsletterHubSpotDriverModule,
      providers: [
        {provide: DaffNewsletterDriver, useExisting: DaffHubspotNewsletterService},
        {provide: DaffNewsletterConfig, useValue: config},
        {provide: DaffNewsletterTransformer, useExisting: DaffNewsletterHubspotTransformer}
      ]
    }
  }
}