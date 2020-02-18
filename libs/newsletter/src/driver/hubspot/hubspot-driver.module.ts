import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { DaffNewsletterHubspotService } from './newsletter.service';
import { DaffHubspotConfig, DaffHubspotFormsService, daffHubspotFormsServiceFactory } from '@daffodil/driver/hubspot';
import { DaffNewsletterDriver } from '../interfaces/newsletter-service.interface';
import { DaffNewsletterConfigToken } from './config/newsletter-config.interface';

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
					provide: DaffNewsletterConfigToken,
					useValue: config,
				},
				{
          provide: DaffHubspotFormsService, 
          useFactory: daffHubspotFormsServiceFactory, 
          deps: [
            HttpClient,
            Document, 
            Router, 
            Title, 
            DaffNewsletterConfigToken
          ],
        }
			],
		};
	}
}
