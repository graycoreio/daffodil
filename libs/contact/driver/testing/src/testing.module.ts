import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffContactDriver } from '@daffodil/contact/driver';
import { DaffTestingContactService } from './contact.service';

@NgModule({
	imports: [CommonModule],
})
export class DaffContactTestingDriverModule {
	static forRoot(): ModuleWithProviders<DaffContactTestingDriverModule> {
		return {
			ngModule: DaffContactTestingDriverModule,
			providers: [
				{
					provide: DaffContactDriver,
					useClass: DaffTestingContactService,
				},
			],
		};
	}
}
