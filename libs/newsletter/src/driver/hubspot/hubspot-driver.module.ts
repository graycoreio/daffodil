import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffNewsletterDriver } from '../injection-tokens/newsletter-driver.token';
import { DaffNewsletterConfig } from '../injection-tokens/newsletter-config.token';
import { DaffNewsletterTransformer } from '../injection-tokens/newsletter-transformer.token';
import { DaffNewsletterHubspotService } from './newsletter.service';
import { DaffNewsletterHubspotTransformer } from './transformers/newsletter.transformer';
import { DaffHubspotConfig } from '@daffodil/driver/hubspot';

@NgModule({
	imports: [CommonModule],
})
export class DaffNewsletterHubSpotDriverModule {
	static forRoot(
		config: DaffHubspotConfig,
	): ModuleWithProviders<DaffNewsletterHubSpotDriverModule> {
		return {
			ngModule: DaffNewsletterHubSpotDriverModule,
			providers: [
				{
					provide: DaffNewsletterDriver,
					useClass: DaffNewsletterHubspotService,
				},
				{
					provide: DaffNewsletterConfig,
					useValue: config,
				},
				{
					provide: DaffNewsletterTransformer,
					useClass: DaffNewsletterHubspotTransformer,
				},
			],
		};
	}
}
