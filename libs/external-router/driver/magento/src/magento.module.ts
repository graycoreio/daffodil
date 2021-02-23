import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffExternalRouterDriver } from '@daffodil/external-router/driver';

import { DaffExternalRouterMagentoDriver } from './magento.service';
import { DaffExternalRouterMagentoDriverConfig, DAFF_EXTERNAL_ROUTER_DRIVER_MAGENTO_CONFIG, daffExternalRouterDriverMagentoConfigurationDefault } from './config';

@NgModule({
	declarations: [],
	imports: [CommonModule],
})
export class DaffExternalRouterDriverMagentoModule {
	static forRoot(config: DaffExternalRouterMagentoDriverConfig = daffExternalRouterDriverMagentoConfigurationDefault): ModuleWithProviders<DaffExternalRouterDriverMagentoModule> {
		return {
			ngModule: DaffExternalRouterDriverMagentoModule,
			providers: [
				{
					provide: DAFF_EXTERNAL_ROUTER_DRIVER_MAGENTO_CONFIG,
					useValue: config
				},
				{
					provide: DaffExternalRouterDriver,
					useExisting: DaffExternalRouterMagentoDriver,
				},
			],
		};
	}
}
