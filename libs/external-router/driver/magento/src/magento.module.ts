import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffExternalRouterDriver } from '@daffodil/external-router/driver';

import { DaffExternalRouterMagentoDriver } from './magento.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
})
export class DaffExternalRouterDriverMagentoModule {
	static forRoot(): ModuleWithProviders<DaffExternalRouterDriverMagentoModule> {
		return {
			ngModule: DaffExternalRouterDriverMagentoModule,
			providers: [
				{
					provide: DaffExternalRouterDriver,
					useExisting: DaffExternalRouterMagentoDriver,
				},
			],
		};
	}
}
