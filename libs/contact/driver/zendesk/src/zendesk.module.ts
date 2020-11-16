import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffContactDriver } from '@daffodil/contact';
import { DaffContactZendeskDriverService } from './zendesk.service';
import {
	DaffContactZendeskDriverConfig,
	DaffContactZendeskDriverConfigToken,
} from './config';

@NgModule({
	imports: [CommonModule],
})
export class DaffContactZendeskDriverModule {
	static forRoot(
		config: DaffContactZendeskDriverConfig,
	): ModuleWithProviders<DaffContactZendeskDriverModule> {
		return {
			ngModule: DaffContactZendeskDriverModule,
			providers: [
				{ provide: DaffContactZendeskDriverConfigToken, useValue: config },
				{
					provide: DaffContactDriver,
					useClass: DaffContactZendeskDriverService,
				},
			],
		};
	}
}
