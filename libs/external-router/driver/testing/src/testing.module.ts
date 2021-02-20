import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffExternalRouterDriver } from '@daffodil/external-router/driver';

import { DaffExternalRouterTestingDriver } from './testing.service';
import {
	DaffExternalRouterDriverTestingConfig,
	DAFF_EXTERNAL_ROUTER_DRIVER_TESTING_CONFIG,
} from './config';

/**
 * The `DaffExternalRouterDriverTestingModule` is an importable NgModule that can 
 * be used to configure the {@link DaffExternalRouterTestingDriver}. 
 */
@NgModule({
	declarations: [],
	imports: [CommonModule],
})
export class DaffExternalRouterDriverTestingModule {
	static forRoot(
		config: DaffExternalRouterDriverTestingConfig,
	): ModuleWithProviders<DaffExternalRouterDriverTestingModule> {
		return {
			ngModule: DaffExternalRouterDriverTestingModule,
			providers: [
				{
					provide: DaffExternalRouterDriver,
					useExisting: DaffExternalRouterTestingDriver,
				},
				{
					provide: DAFF_EXTERNAL_ROUTER_DRIVER_TESTING_CONFIG,
					useValue: config,
				},
			],
		};
	}
}
